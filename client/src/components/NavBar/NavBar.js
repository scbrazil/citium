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
import MenuIcon from '@material-ui/icons/Menu';
import NavBarMobile from './NavBarMobile.js';
import NavBarDesktop from './NavBarDesktop.js';
import Theme from '../../Theme.js';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora'
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: 'linear-gradient(to bottom right, rgba(21.6, 18.4, 40.8, 0.2), 0.1%, #2d2d2d, 0%, rgba(21.6, 18.4, 40.8, 0.2))',
  },
  navBarDesktop: {
    background: 'transparent',
    boxShadow: 'none',
    fontSize: '52px'
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
    fontFamily: 'Lora'
  },
  loginButton: {
    justifyContent: 'flex-end',
  },
  menuLinks: {
    alignText: 'center',
  },
  menuTemp: {

  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(Theme.breakpoints.down('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { handleLoginStatus, isMobile, loggedIn, loginSwitch, openLoginModal } = useContext(AppContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const handleLoginOpen = (event) => {
    event.preventDefault()
    loginSwitch(true);
    openLoginModal(true);
  };

  const menuItems = [
    {
      menuItem: 'Home',
      pageUrl: '/',
      pageKey: 1,
    },
    {
      menuItem: 'Login',
      pageUrl: '/login',
      pageKey: 2,
    },
    {
      menuItem: 'Journal',
      pageUrl: '/journal',
      pageKey: 3,
    },
    {
      menuItem: 'Favorite Quotes',
      pageUrl: '/favorite-quotes',
      pageKey: 4,
    },
    {
      menuItem: 'About',
      pageUrl: '/about',
      pageKey: 5,
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
    <Grid container className={classes.root}>
      {isMobile ? (
        <NavBarMobile />
      ) : (
        <NavBarDesktop />
      )}
    </Grid>
    </MuiThemeProvider>
  );
};

export default withRouter(NavBar);
