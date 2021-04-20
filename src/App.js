import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import theme from './muiTheme.tsx';
import { AppProvider } from './context/context.js';
import NavBar from './NavBar.js';
import Home from './components/Home/Home.js';
import Login from './components/Login.js';
import JournalEntries from './components/JournalEntries/JournalEntries.js';
import FavoriteQuotes from './components/FavoriteQuotes/FavoriteQuotes.js';
import About from './components/About.js';
import PageNotFound from './components/PageNotFound.js';
import SignIn from './components/SignIn.js';
import LoginModal from './components/LoginModal.js';

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: '10vh',
  },
  mainBody: {
    height: '90vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (

    <div
      style={{
        // backgroundColor: '#4E4E4E',
        // background: 'url("https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")',
        height: '100%vh',
        minHeight: '100vh',
      }}
    >
      <Router>
        <Fragment>
          <CssBaseline />
          <div className={classes.navBar}>
            <NavBar />
          </div>
          {/* <div className='bg-image' style={{ height: '100%vh', minHeight: '100vh' }}> */}
          {/* <div className='bg-image'></div> */}
            <div className='appContent'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={SignIn} />
                <Route path='/journal' component={JournalEntries} />
                <Route path='/favorite-quotes' exact component={FavoriteQuotes} />
                <Route path='/about' component={About} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          {/* </div> */}
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
