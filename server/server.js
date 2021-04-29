const express = require('express');
const router = require('express').Router();
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv/config');

const app = express();

const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Routes
app.get('/random-quote', async (req, res) => {
  try {
    let quote = await axios.get('https://stoic-quotes.com/api/quote');
    res.send(quote.data);
  } catch (error) {
    res.status(400).send('Quote retrieval failed');
  }
});

app.get('/stoic-quote', async (req, res) => {
  try {
    let quote = await axios.get('https://randomstoicquotesapi.herokuapp.com/api/v1/quotes');
    res.send(quote.data);
  } catch (error) {
    console.error('Could not retrieve quote: ', error);
    res.status(400).send('Retrieval failed');
  }
})

app.get('/mostwanted', async (req, res) => {
  try {
    let list = await axios.get('https://api.fbi.gov/wanted/v1/list');

    res.send(list);
  } catch (error) {
    console.error('Could not retrieve most wanted');
    res.status(400).send('Nope.');
  }
});
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


// app.get('*', (req, res) => {
//   if (req.path.endsWith('bundle.js')) {
//       res.sendFile(path.resolve(__dirname, 'bundle.js'));
//   } else {
//       res.sendFile(path.resolve(__dirname, 'index.html'));
//   }
// });

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});