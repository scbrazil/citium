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
import Login from '../LoginRegistration/Login.js';
import Register from '../LoginRegistration/Register.js';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0em 0em 0em 0em",
    backgroundColor: "#fff",
    height: "100vh",
  },
  main: {
    height: "100vh",
    padding: '2em 0em 0em 0em',
    backgroundColor: "white",
  },
  paperStyles: {
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
  },
  loginButton: {
    // backgroundColor: "#92B9E1",
    // color: '#ffffff',
    "&:hover": {
      backgroundColor: "#939393",
      color: "#ffffff",
    },
  },
}));

const SplashDesktop = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleSplash, loginDialog, loginSwitch, openLoginModal } = useContext(AppContext);

  const handleSplashSubmit = () => {
    handleSplash();
  };

  const handleLoginOpen = (event) => {
    event.preventDefault()
    loginSwitch(true);
    openLoginModal(true);
  };

  return (
    <div className={classes.root}>
      <LoginRegistration>
        {loginDialog ? <Login /> : <Register />}
      </LoginRegistration>
      <Grid container direction='column' align='center'>
        <Grid item className='logoDesktop' style={{ fontSize: '54px', paddingTop: '1.5em' }}>
          CITIUM
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row" className={classes.main}>
        <Grid item xs={1} sm={2} />
        <Grid item xs={6} sm={5} className={classes.cardStyles}>
          <Paper className={classes.paperStyles} elevation={0}>
            <div>
              <Typography
                variant="h6"
                style={{
                  color: "#6f6f6f",
                  fontStyle: "italic",
                  textAlign: "justify",
                }}
              >
                "Well-being is realized by small steps, but it is truly no small
                thing."
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  color: "#6f6f6f",
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                - Zeno of Citium
              </Typography>
            </div>
            <div className={classes.textStyles}>
              <Typography>
                Citium encourages periodic meditations to effectively use your most precious asset: time.
              </Typography>
            </div>
            <div className={classes.textStyles}>
              <Typography>
                Journal and save your thoughts and progress toward a disciplined, fulfilled life. While Citium espouses the virtues of Stoicism, anyone will benefit from being more present and ready to continue through each day.
              </Typography>
            </div>
            <Grid container alignItems="center" direction="column">
              <Grid item xs={12}>
                <div style={{ marginTop: "2em" }}>
                  <Button
                    className={classes.enterButton}
                    variant="contained"
                    size="large"
                    style={{ fontSize: "14px", margingRight: '3em' }}
                    onClick={(event) => { handleSplash(event) }}
                  >
                    Enter
                  </Button>
                  <Button
                    className={classes.loginButton}
                    variant="contained"
                    size="large"
                    style={{ fontSize: "14px", marginLeft: '3em' }}
                    onClick={(event) => { handleLoginOpen(event) }}
                  >
                    Login
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={1} />
        <Grid item xs={3} sm={2}>
          <img src={image}></img>
        </Grid>
        <Grid xs={1} sm={2} />
      </Grid>
    </div>
  );
};

export default SplashDesktop;