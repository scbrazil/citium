import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context.js";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import image from "../../assets/images/zeno-citium-bust3.webp";
import LoginRegistration from "../LoginRegistration/LoginRegistration.js";
import Login from "../LoginRegistration/Login.js";
import Register from "../LoginRegistration/Register.js";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0em 0em 0em 0em",
    backgroundColor: "#fff",
    height: "100vh",
  },
  main: {
    height: "100vh",
    padding: "3em 1em 1em 3em",
    backgroundColor: "white",
  },
  quote: {
    padding: "2em 2em 0em 2em",
  },
  paperStyles: {
    // background: 'linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.2), 0.1%, #ffffff, 95%, rgba(21.6, 18.4, 40.8, 0.2))',
    // opacity: '0.3',
    background: "rgba(255, 255, 255, 0)",
    align: "center",
    margin: "4em 0em 0em 0em",
  },
  textStyles: {
    margin: "1em 0em 0em 0em",
  },
  enterButton: {
    backgroundColor: "#9292e1",
    // color: '#ffffff',
    "&:hover": {
      backgroundColor: "#7171ae",
      color: "#ffffff",
    },
    // marginLeft: '0.5em',
    // marginRight: '0.1em',
    // margin: '1em 0em 0em '
    marginBottom: "1em",
  },
  loginButton: {
    // backgroundColor: "#92B9E1",
    // color: '#ffffff',
    "&:hover": {
      backgroundColor: "#939393",
      color: "#ffffff",
    },
    marginBottom: "1em",
  },
}));

const SplashMobile = () => {
  const classes = useStyles();
  const { handleSplash, loginDialog } = useContext(AppContext);

  const handleSplashSubmit = () => {
    handleSplash();
  };

  return (
    <div className="splashMobileMain" style={{paddingTop: '10em'}}>
      <LoginRegistration>
        {loginDialog ? <Login /> : <Register />}
      </LoginRegistration>
      <Grid container direction="column" align="center">
        <Grid
          item
          className="logoDesktop"
          style={{ fontSize: "54px", paddingTop: "1.5em" }}
        >
          CITIUM
        </Grid>
      </Grid>
      {/* <div className={classes.quote}>
        <div>
          <Typography
            variant="h6"
            style={{
              color: "#6f6f6f",
              fontStyle: "italic",
              textAlign: "justify",
              variant: "body2",
            }}
          >
            "Well-being is realized by small steps, but it is truly no small
            thing."
          </Typography>
        </div>
      </div> */}
      {/* <div>
        <div>
          <Typography
            style={{
              color: "#939393",
              fontStyle: "italic",
              textAlign: "right",
              variant: "body2",
            }}
          >
            - Zeno of Citium
          </Typography>
        </div>
      </div> */}
      <div>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Paper className={classes.paperStyles} elevation={0}>
              <div>
                <Typography
                  className={classes.textStyles}
                  variant="h6"
                  align="center"
                >
                  Meditation for your most precious asset: time.
                </Typography>
              </div>
              <Grid container alignItems="center" direction="column">
                <Grid item xs={12}>
                  <div style={{ marginTop: "2em" }}>
                    <Button
                      className={classes.enterButton}
                      variant="contained"
                      size="large"
                      style={{ fontSize: "14px" }}
                      onClick={(event) => {
                        handleSplash(event);
                      }}
                    >
                      Enter
                    </Button>
                    <Button
                      className={classes.loginButton}
                      variant="contained"
                      size="large"
                      style={{ fontSize: "14px" }}
                      onClick={(event) => {
                        handleLoginOpen(event);
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <div>
                <Typography className={classes.textStyles} variant='subtitle1' align='center'>
                  Journaled progress toward a disciplined, fulfilled life.
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </div>
    </div>
  );
};

export default SplashMobile;
