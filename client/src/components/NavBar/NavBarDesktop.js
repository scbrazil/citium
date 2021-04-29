import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppContext } from '../../context/context.js';
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Switch,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  withTheme,
} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      'linear-gradient(to bottom right, rgba(21.6, 18.4, 40.8, 0.2), 0.1%, #2d2d2d, 93%, rgba(21.6, 18.4, 40.8, 0.2))',
  },
  navBarDesktop: {
    background: 'transparent',
    boxShadow: 'none',
    fontSize: '52px',
    paddingBottom: '4em',
  },
  navBarMobile: {
    background: 'transparent',
    boxShadow: 'none',
  },
  navBarLinks: {
    color: '#fff',
    textDecoration: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoGrid: {},
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
    marginTop: '0.16em',
    fontFamily: 'Lora',
  },
  loginButton: {
    justifyContent: 'flex-end',
  },
  menuLinks: {
    alignText: 'center',
  },
  menuTemp: {},
}));

const NavBarDesktop = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    handleLoginStatus,
    loggedIn,
    loginSwitch,
    openLoginModal,
  } = useContext(AppContext);

  const handleLoginOpen = (event) => {
    event.preventDefault();
    loginSwitch(true);
    openLoginModal(true);
  };

  return (
    <AppBar className={classes.navBarDesktop} position='fixed'>
      <Toolbar>
        <Grid container direction='row' align='center'>
          <Grid container direction='column'>
            <Grid item xs={1} />
            <Grid container alignItems='center' justify='center'>
              <Grid item className={classes.logoGrid}>
                <div className='logoDesktop'>CITIUM</div>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid
            display='flex'
            alignItems='center'
            align='center'
            flexwrap='wrap'
            container
            className={classes.menuLinks}
          >
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={3} className={classes.menuTemp}>
                  <Link to='/' className={classes.navBarLinks}>
                    <Typography variant='subtitle1'>Home</Typography>
                  </Link>
                </Grid>
                <Grid item item xs={3} className={classes.menuTemp}>
                  <Link to='/dashboard' className={classes.navBarLinks}>
                    <Typography variant='subtitle1'>Dashboard</Typography>
                  </Link>
                </Grid>
                <Grid item item xs={3} className={classes.menuTemp}>
                  <Link to='/about' className={classes.navBarLinks}>
                    <Typography variant='subtitle1'>About</Typography>
                  </Link>
                </Grid>
                <Grid item xs={3} className={classes.menuTemp}>
                  {!loggedIn ? (
                    <Link
                      to=''
                      onClick={(e) => {
                        handleLoginOpen(e);
                      }}
                      className={classes.navBarLinks}
                    >
                      <Typography variant='subtitle1'>Login</Typography>
                    </Link>
                  ) : (
                    <Link
                      to=''
                      onClick={(e) => {
                        handleLoginStatus(false);
                      }}
                      className={classes.navBarLinks}
                    >
                      <Typography variant='subtitle1'>Logout</Typography>
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarDesktop;
