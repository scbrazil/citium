import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f00",
    },
    secondary: {
      main: "#0f0",
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        "& .MuiTextField-root": {
          backgroundColor: "#000",
          color: "#000",
        },
        "& .MuiFilledInput-root": {
          backgroundColor: "#fff",
          color: "#000",
        },
        "& .MuiFilledInput-label": {
          color: "#000",
        },
        paddingBottom: "1em",
      },
    },
    MuiDialog: {
      // global dialog properties
      paper: {
        // paper styles
        color: "#fff",
        backgroundColor: "#2d2d2d",
        // alignItems: 'center'
      },
    },
    MuiLink: {
      root: {
        cursor: 'pointer'
      }
    }
  },
});

export default Theme;
