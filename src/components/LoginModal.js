import React, { useContext } from 'react';
import { AppContext } from '../context/context.js';
import {
  Grid,
  makeStyles,
  Modal,
  Paper,
  Typography
} from "@material-ui/core";
import Login from './Login.js';
import Register from './Register';

const LoginModal = () => {

  const { modalOpen, openLoginModal } = useContext(AppContext);

  const handleLoginModalClose = () => {
    openLoginModal(false);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        close={handleLoginModalClose}
      >
        <Grid container>
          <Grid item xs={6}>
            <Register />
          </Grid>
          <Grid item xs={6}>
            <Login />
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}

export default LoginModal;
