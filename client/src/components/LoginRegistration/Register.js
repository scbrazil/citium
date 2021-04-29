import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/context.js';
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
    paddingBottom: '1em',
  },
  registerButton: {
    backgroundColor: '#9292e1',
    '&:hover': {
      backgroundColor: '#7171ae',
      color: '#ffffff',
    },
    // margin: '0.3em 5em 0em 5em',
  },
}));

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassWord] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [err, setErr] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true)
  const { handleLoginStatus, loginSwitch, openLoginModal } = useContext(AppContext);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setPasswordMatch(true);
      registerUser();
    } else {
      setPasswordMatch(false);
    }
  };

  const handleLoginSwitch = (event) => {
    event.preventDefault()
    loginSwitch(true);
  }

  const handleClose = () => {
    openLoginModal(false);
  }

  return (
    <div className={classes.root}>
      <form
        noValidate
        onSubmit={e => {
          e.preventDefault()
          if (password === confirmPassword) {
            setPasswordMatch(true);
            registerUser(email, password, firstName, lastName, handleClose, handleLoginStatus, err);
          } else {
            setPasswordMatch(false);
          }
        }}
      >
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputFields}
              autoComplete='fname'
              name='firstName'
              variant='filled'
              // margin='dense'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              size='small'
              onInput={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.inputFields}
              variant='filled'
              // margin='dense'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              size='small'
              onInput={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Grid> */}
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
              // size='small'
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputFields}
              variant='filled'
              // margin='dense'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              // size='small'
              onInput={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.inputFields}
              variant='filled'
              // margin='dense'
              required
              fullWidth
              name='confirm-password'
              label='Confirm Password'
              type='password'
              id='confirm-password'
              autoComplete='current-password'
              // size='small'
              onInput={(e) => {
                setConfirmPassWord(e.target.value);
              }}
            />
          </Grid>
          <Button
            className={classes.registerButton}
            type='submit'
            fullWidth
            variant='contained'
            size='large'
            style={{
              marginBottom: '0.5em',
            }}
          >
            Submit
          </Button>
          <Grid container direction='column'>
            {passwordMatch ? (
              <div></div>
            ) : (
              <Grid item xs>
                <Typography
                  variant='body1'
                  style={{ color: 'red' }}
                >
                  Passwords do not match.
                </Typography>
              </Grid>
            )
            }
            <Grid item xs>
              <Link
                onClick={e => { handleLoginSwitch(e) }}
                variant='body2'
                style={{
                  color: 'white',
                  paddingRight: '0.7em',
                }}
              >
                Already have an account? Login here.
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const registerUser = (email, password, firstName, lastName, handleClose, handleLoginStatus, err) => {
  axios
    .post(`/api/auth/register?email=${email}&password=${password}&firstName=${firstName}&lastName=${lastName}`, null, {
      // withCredentials: true
    })
    .then(() => {
      handleLoginStatus(true)
      handleClose()
      alert(`${email} registered successfully`);
      window.location.reload(false);
    })
    .catch((err) => {
      alert(`Registration for ${email} failed.`);
      console.log(`Registration failed: ${err.response.data}`);
    })
}

export default Register;
