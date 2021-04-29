import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/context.js';
import { AuthContext } from '../../context/authContext.js';
import {
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em',
    paddingBottom: '1em',
  },
  loginButton: {
    backgroundColor: '#9292e1',
    '&:hover': {
      backgroundColor: '#7171ae',
      color: '#ffffff',
    },
    margin: '0em 0em 0em 0em',
  },
}));

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { handleLoginStatus, loginSwitch, openLoginModal } = useContext(AppContext);

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    userLogin();
  };

  const handleRegisterSwitch = (event) => {
    event.preventDefault()
    loginSwitch(false);
  }

  const handleClose = () => {
    openLoginModal(false);
  }

  if (isLoggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className={classes.root}>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          userLogin(email, password, handleClose, handleLoginStatus, err);
        }}
      >
        <Grid container spacing={2}></Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputFields}
              variant='filled'
              // margin='dense'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              size='medium'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputFields}
              variant='filled'
              // margin='dense'
              fullWidth
              id='password'
              label='Password'
              name='password'
              autoComplete='current-password'
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              size='small'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  value='remember'
                  color='secondary'
                  labelstyle={{ color: 'white' }}
                  iconstyle={{ fill: 'white' }}
                  size='small'
                />
              }
              label={<span style={{ color: '#ffffff' }}>Remember me</span>}
            />
            <Button
              className={classes.loginButton}
              type='submit'
              fullWidth
              variant='contained'
              size='large'
              style={{
                marginBottom: '0.5em',
              }}
            >
              Sign In
            </Button>
            <Grid container direction='row'>
              <Grid item xs>
                <Link
                  href='#'
                  variant='body2'
                  style={{
                    color: 'white',
                  }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link
                  onClick={e => { handleRegisterSwitch(e) }} variant='body2'
                  style={{
                    color: 'white',
                    paddingLeft: '0.7em'
                  }}>
                  Register account.
                </Link>
              </Grid>
            </Grid>
        </Grid>
      </form>
    </div>
  );
};

const userLogin = (email, password, handleClose, handleLoginStatus, setErr) => {
  axios
    .post(`/api/auth/login?email=${email}&password=${password}`, null, {
      withCredentials: true
    })
    .then(res => {
      handleLoginStatus(true);
      handleClose();
      alert(`${email} logged in successfully`);
      window.location.reload(false);
      console.log('login user: ', res.data)
      localStorage.setItem('userData', JSON.stringify(res));
    })
    .catch((err) => {
      alert(`Login for ${email} failed.`);
      console.error('Login failed: ', err);
    })
}

export default Login;
