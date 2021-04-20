import React from 'react';
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
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "transparent",
          fontWeight: "bold",
          textShadow: '5px'
        }
      },
    }
  }
});

const useStyles = makeStyles((theme => ({
  signUpContainer: {
    padding: '1em 3em 1em 5em'
  },
  inputFields: {
    backgroundColor: '#fff'
  }
})));

const Register = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container component='main'>
        <Grid item xs={12} md={6} className={classes.signUpContainer}>
          <div>
            <Typography component="h1" variant="h5" style={{color: 'white'}}>
              Sign up
            </Typography>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.inputFields}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

export default Register;