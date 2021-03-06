const express = require('express');
const session = require('express-session');
const path = require('path');
// const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
const expressStaticGzip = require('express-static-gzip');
const passport = require('./passport/setup.js');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.xatyu.mongodb.net/citium?retryWrites=true&w=majority`;

const port = process.env.PORT || 3000;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log(`MongoDB connected ${dbURI}`))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: new MongoStore({ mongooseConnection: mongoose.connection })
    store: new MongoDBStore({ mongooseConnection: mongoose.connection })
    // store: new MongoDBStore({
    //   collections: 'sessions',
    //   uri: dbURI
    // })
  })
);
app.use(passport.initialize());
app.use(passport.session());
router.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// Routes
app.use('/api/auth', require('./routes/AuthRoutes'));
app.use('/user', require('./routes/UserRoutes'));
app.use(
  '/',
  expressStaticGzip('client/dist', {
    enableBrotli: true,
    orderPreference: ['br'],
    setHeaders: function (res, path) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
  );

app.get('/stoic-quote', async (req, res) => {
  try {
    let quote = await axios.get('https://stoic-quotes.com/api/quote');
    res.send(quote.data);
  } catch (error) {
    res.status(400).send('Quote retrieval failed');
  }
});

const isAuthenticated = (req, res, next) => {
  if (req.user) return next();
  else return res.status(401).send('User is not authenticated.');
};

app.get('/checkauth', isAuthenticated, async (req, res) => {
  console.log('/checkauth req: ', req);
  try {
    await delete req.user._doc.password;
    res.status(200).send(req.user);
  } catch (error) {
    console.error(error);
    res.status(400).send('checkauth route failed: ', err);
  }
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});