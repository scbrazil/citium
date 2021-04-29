import React from "react";
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
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          // color: "transparent",
          color: '#939393',
          fontSize: '18px',
          fontWeight: "bold",
          textShadow: "50px",
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "6.5em",
    // '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    //   borderColor: '#575757',
    //   background: '#fff',
    // }
    '& .MuiTextField-root': {
      backgroundColor: '#000',
      color: '#000'
    },
    '& .MuiFilledInput-root': {
      backgroundColor: '#fff',
      color: '#000',
    },
    '& .MuiFilledInput-label': {
      color: '#000'
    }
  },
  cardStylesRegister: {
    // width: '350px',
    backgroundColor: '#2d2d2d',
    padding: "0.5em 2em 2em 2em",
    margin: '1em 1em 1em 1em',
    opacity: '0.95'
  },
  cardStylesLogin: {
    // width: '400px',
    backgroundColor: '#2d2d2d',
    padding: "0.5em 2em 2.7em 2em",
    // margin: '1em 13em 1em 3em',
    margin: '1em 1em 1em 1em',
    opacity: '0.95'
  },
  buttons: {
    marginTop: '0.3em'
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container component="main" direction='row'>
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={4} className={classes.signInContainer}>
            <Card className={classes.cardStylesLogin}>
            <div>
              <Typography component="h1" variant="h5" style={{ color: "#fff" }}>
                Sign In
              </Typography>
              <form noValidate>
                <TextField
                  className={classes.inputFields}
                  variant="filled"
                  margin="dense"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  size="small"
                />
                <TextField
                  className={classes.inputFields}
                  variant="filled"
                  margin="dense"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="current-password"
                  size="small"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="remember"
                      color="secondary"
                      labelstyle={{ color: "white" }}
                      iconstyle={{ fill: "white" }}
                      size="small"
                    />
                  }
                  label={<span style={{ color: "#ffffff" }}>Remember me</span>}
                />
                <Button
                  className={classes.buttons}
                  color='primary'
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" style={{ color: "white" }}>
                      Forgot password?
                    </Link>
                  </Grid>
                  {/* <Grid item>
                    <Link href="#" variant="body2" style={{ color: "white" }}>
                      {"Sign up"}
                    </Link>
                  </Grid> */}
                </Grid>
              </form>
            </div>
            </Card>
          </Grid>
          <Grid item xs={1} md={1} />
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={4} className={classes.signUpContainer}>
            <Card className={classes.cardStylesRegister}>
            <div>
              <Typography
                component="h1"
                variant="h5"
                style={{ color: "white" }}
              >
                Sign up
              </Typography>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.inputFields}
                      autoComplete="fname"
                      name="firstName"
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.inputFields}
                      variant="filled"
                      margin="dense"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.inputFields}
                      variant="filled"
                      // margin='dense'
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.inputFields}
                      variant="filled"
                      // margin='dense'
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      size="small"
                    />
                  </Grid>
                  <Button
                    className={classes.buttons}
                    color="primary"
                    type="submit"
                    fullWidth
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </form>
            </div>
            </Card>
          </Grid>
          <Grid item sm={1} md={1} />
        </Grid>
      </div>
    </MuiThemeProvider>
  );
};

export default SignIn;
