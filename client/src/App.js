import React, { Component, Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/context.js";
import { AuthContext } from "./context/authContext.js";
import { useAuth } from "./context/authContext.js";
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import NavBar from "./components/Navbar/NavBar.js";
import Main from "./components/Main/Main.js";
import About from "./components/About.js";
import PageNotFound from "./components/PageNotFound.js";
import LoginRegistration from "./components/LoginRegistration/LoginRegistration.js";
import Register from "./components/LoginRegistration/Register.js";
import Login from "./components/LoginRegistration/Login.js";
import Splash from "./components/Splash/Splash.js";
import Meditation from "./components/Meditation/Meditation.js";

const useStyles = makeStyles((theme) => ({
  navBar: {
    height: "10vh",
  },
  mainBody: {
    height: "90vh",
  },
}));

const App = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginDialog, showSplash } = useContext(AppContext);
  // const user = useContext(AuthContext);

  return showSplash ? (
    <div
      style={{
        height: "100%vh",
        minHeight: "100vh",
      }}
    >
      <Splash />
    </div>
  ) : (
    <div
      style={{
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Fragment>
          <div className={classes.navBar}>
            <NavBar />
          </div>
          <LoginRegistration>
            {loginDialog ? <Login /> : <Register />}
          </LoginRegistration>
          <div className="appContent">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/meditation" component={Meditation} />
              <Route exact path="/about" component={About} />
              <Route path="/notfound" component={PageNotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
