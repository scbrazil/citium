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
  signInFields: {
    backgroundColor: '#fff'
  }
})));

const Login = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <Typography style={{color: '#fff'}} component='h1' variant='h5'>
          Sign In
        </Typography>
        <form noValidate>
          <TextField
            className={classes.signInFields}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            className={classes.signInFields}
            variant='outlined'
            margin='normal'
            fullWidth
            id='password'
            label='Password'
            name='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={
              <Checkbox
                value='remember'
                color='primary'
                labelStyle={{color: 'white'}}
                iconStyle={{fill: 'white'}}
              />}
            label={<span style={{color: '#ffffff'}}>Remember me</span>}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='#fff'
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' style={{color: 'white'}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2' style={{color: 'white'}}>
                {'Sign up'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </MuiThemeProvider>
  )
}

export default Login;
