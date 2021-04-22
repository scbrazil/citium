import React, { Component, Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "./context/context.js";
import { AuthContext } from './context/authContext.js';
import { useAuth } from './context/authContext.js';
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Theme from "./Theme.js";
import { CssBaseline } from "@material-ui/core/";
import NavBar from "./NavBar.js";
import Home from "./components/Home/Home.js";
import Admin from './Admin.js';
// import Login from "./components/Login.js";
import JournalEntries from "./components/JournalEntries/JournalEntries.js";
import FavoriteQuotes from "./components/FavoriteQuotes/FavoriteQuotes.js";
import About from "./components/About.js";
import PageNotFound from "./components/PageNotFound.js";
import SignIn from "./components/SignIn.js";
import LoginModal from "./components/LoginModal.js";
import LoginRegistrationModal from "./components/global/LoginRegistration/LoginRegistrationModal.js";
import Register from "./components/global/LoginRegistration/Register.js";
import Login from "./components/global/LoginRegistration/Login.js";

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
  // const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  // const [authTokens, setAuthTokens] = useState(existingTokens);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loginDialog } = useContext(AppContext);
  const user = useContext(AuthContext);

  // const setTokens = (data) => {
  //   localStorage.setItem("tokens", JSON.stringify(data));
  //   setAuthTokens(data);
  // }

  return (
    // <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, setIsLoggedIn: setIsLoggedIn, isLoggedIn: isLoggedIn }}>
    <div
      style={{
        height: "100%vh",
        minHeight: "100vh",
      }}
    >
      <Router>
        <Fragment>
          {/* <ThemeProvider theme={Theme}> */}
            {/* <CssBaseline /> */}
            <div className={classes.navBar}>
              <NavBar />
            </div>
            <LoginRegistrationModal>
              {loginDialog ? (
                <Login />
              ) : (
                <Register />
              )}
            </LoginRegistrationModal>
            <div className="appContent">
              <Switch>
                <Route exact path="/" component={Home} />
                <Router path='/admin' component={Admin} />
                <Route exact path="/login" component={SignIn} />
                <Route path="/journal" component={JournalEntries} />
                <Route
                  path="/favorite-quotes"
                  exact
                  component={FavoriteQuotes}
                />
                <Route path="/about" component={About} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
            {/* </div> */}
          {/* </ThemeProvider> */}
        </Fragment>
      </Router>
    </div>
    // </AuthContext.Provider>
  );
};

export default App;
