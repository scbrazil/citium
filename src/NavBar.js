import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContext } from "./context/context.js";
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
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import LoginModal from './components/LoginModal.js';
// import { AppProvider as setDarkMode } from '../context/context';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora'
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // paddingTop: "1em",
    background: 'linear-gradient(to bottom right, rgba(21.6, 18.4, 40.8, 0.2), 0.1%, #2d2d2d, 93%, rgba(21.6, 18.4, 40.8, 0.2))',
    // backgroundColor: '#2d2d2d',
    // opacity: '0.96'
    // text
  },
  navBarDesktop: {
    // color: 'transparent'
    // backgroundColor: '#45b3e0',
    background: "transparent",
    boxShadow: "none",
    fontSize: '52px'
  },
  navBarMobile: {
    // color: 'transparent'
    // backgroundColor: '#45b3e0',
    background: "transparent",
    boxShadow: "none",
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
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    marginTop: "0.16em",
    fontFamily: 'Lora'
  },
  loginButton: {
    // marginRight: theme.spacing(2),
    justifyContent: "flex-end",
  },
  menuLinks: {
    alignText: "center",
    // backgroundColor: 'red'
  },
  menuTemp: {
    // backgroundColor: 'blue'
  },
}));

const NavBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { openLoginModal } = useContext(AppContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const handleLoginModalOpen = () => {
    // history.push(pageUrl);
    openLoginModal();
  };

  const menuItems = [
    {
      menuItem: "Home",
      pageUrl: "/",
      pageKey: 1,
    },
    {
      menuItem: "Login",
      pageUrl: "/login",
      pageKey: 2,
    },
    {
      menuItem: "Journal",
      pageUrl: "/journal",
      pageKey: 3,
    },
    {
      menuItem: "Favorite Quotes",
      pageUrl: "/favorite-quotes",
      pageKey: 4,
    },
    {
      menuItem: "About",
      pageUrl: "/about",
      pageKey: 5,
    },
  ];

  return (
    <MuiThemeProvider theme={theme}>
    <Grid container className={classes.root}>
      {isMobile ? (
        <AppBar className={classes.navBarMobile} position="static">
          <Toolbar>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Grid
                  display="flex"
                  alignItems="center"
                  flexwrap="wrap"
                  container
                >
                  <Grid item xs={12} align='center' className={classes.title}>
                    {/* <Typography variant="h4" className={classes.title}>
                      Citium
                    </Typography> */}
                    <div className='logoMobile'>CITIUM</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <div>
                  <>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                      onClick={handleMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={open}
                      onClose={() => setAnchorEl(null)}
                    >
                      {menuItems.map((item) => {
                        const { menuItem, pageUrl, pageKey } = item;
                        return (
                          <MenuItem
                            onClick={() => handleMenuClick({ pageUrl })}
                            key={pageKey}
                          >
                            {menuItem}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className={classes.navBarDesktop} position="static">
          <Toolbar>
            <Grid container direction="row" align="center">
              <Grid container direction="column">
                <Grid item xs={1} />
                <Grid container alignItems="center" justify="center">
                  <Grid item className={classes.logoGrid}>
                    <div className='logoDesktop'>CITIUM</div>
                  </Grid>
                </Grid>
                <Grid item xs={1} />
              </Grid>
              <Grid
                display="flex"
                alignItems="center"
                align="center"
                flexwrap="wrap"
                container
                // direction="row"
                className={classes.menuLinks}
              >
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <Grid container>
                    <Grid item xs={4} className={classes.menuTemp}>
                      <Link to='/' className={classes.navBarLinks}>
                        <Typography variant='subtitle1'>Home</Typography>
                      </Link>
                    </Grid>
                    <Grid item item xs={4} className={classes.menuTemp}>
                      <Link to='/about' className={classes.navBarLinks}>
                        <Typography variant='subtitle1'>About</Typography>
                      </Link>
                    </Grid>
                    <Grid item xs={4} className={classes.menuTemp}>
                      <Link to='/login' className={classes.navBarLinks}>
                        <Typography variant='subtitle1'>Login</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </Grid>
    </MuiThemeProvider>
  );
};

export default withRouter(NavBar);
