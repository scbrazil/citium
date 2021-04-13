import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core/";
import theme from "./muiTheme.tsx";
import NavBar from "./NavBar.js";
import Home from './components/Home/Home.js';
import Login  from './components/Login.js';
import Journal from './components/Journal/Journal.js';
import FavoriteQuotes from './components/FavoriteQuotes/FavoriteQuotes.js';
import About from './components/About.js';

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/journal" component={Journal} />
            <Route path="/favorite-quotes" exact component={FavoriteQuotes} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
