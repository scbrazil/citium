import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/context.js";
import {
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogStyles: {
    align: "center",
  },
}));

const LoginRegistrationModal = ({ children }) => {
  const classes = useStyles();
  const { loginDialog, openLogin, openLoginModal } = useContext(AppContext);

  const handleClose = () => {
    openLoginModal(false);
  };

  return (
    // <MuiThemeProvider theme={theme}>
    <Dialog
      className={classes.dialogStyles}
      open={openLogin}
      onClose={handleClose}
      maxWidth="xs"
    >
      {openLogin ? (
        <DialogTitle>
          Sign In
        </DialogTitle>
      ) : (
        <DialogTitle>
          Register
        </DialogTitle>
      )}
      <DialogContent>
        <>
          {children}
        </>
      </DialogContent>
    </Dialog>
    // </MuiThemeProvider>
  );
};

export default LoginRegistrationModal;
