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
import SplashMobile from './SplashMobile.js';
import SplashDesktop from './SplashDesktop.js';

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

const Splash = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const { handleSplash, isMobile, loginDialog, loginSwitch, openLoginModal } = useContext(AppContext);

  const handleSplashSubmit = () => {
    handleSplash();
  };

  const handleLoginOpen = (event) => {
    event.preventDefault()
    loginSwitch(true);
    openLoginModal(true);
  };

  return (
    isMobile ? (
      <SplashMobile />
    ) : (
      <SplashDesktop />
    )
  );
};

export default Splash;
