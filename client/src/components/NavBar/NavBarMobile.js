import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContext } from "../../context/context.js";
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
// import { menuItems } from "./menuItems.js";
// import { handleLoginOpen } from './menuItems.js';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Lora",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(to bottom right, rgba(21.6, 18.4, 40.8, 0.2), 0.1%, #2d2d2d, 93%, rgba(21.6, 18.4, 40.8, 0.2))",
  },
  navBarDesktop: {
    background: "transparent",
    boxShadow: "none",
    fontSize: "52px",
  },
  navBarMobile: {
    background: "transparent",
    boxShadow: "none",
  },
  navBarLinks: {
    // color: "#fff",
    textDecoration: "none",
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
    fontFamily: "Lora",
  },
  loginButton: {
    justifyContent: "flex-end",
  },
  menuLinks: {
    alignText: "center",
  },
  menuTemp: {},
}));

const NavBarMobile = (props) => {
  const { history } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
    handleLoginStatus,
    loggedIn,
    loginSwitch,
    openLoginModal,
  } = useContext(AppContext);

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
      menuItem: 'Dashboard',
      pageUrl: '/dashboard',
      pageKey: 3
    },
    // {
    //   menuItem: 'Journal',
    //   pageUrl: '/journal',
    //   pageKey: 4,
    // },
    // {
    //   menuItem: 'Favorite Quotes',
    //   pageUrl: '/favorite-quotes',
    //   pageKey: 5,
    // },
    {
      menuItem: 'About',
      pageUrl: '/about',
      pageKey: 6,
    },
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const handleLoginOpen = (event) => {
    event.preventDefault();
    loginSwitch(true);
    openLoginModal(true);
  };

  return (
    <AppBar className={classes.navBarMobile} position="static">
      <Toolbar>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Grid display="flex" alignItems="center" flexwrap="wrap" container>
              <Grid item xs={12} align="center" className={classes.title}>
                <div className="logoMobile">CITIUM</div>
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
                    if (menuItem === 'Login') {
                      return (
                        <Link
                          to={pageUrl}
                          onClick={(e) => {
                            handleLoginOpen(e);
                          }}
                          style={{ color: '#000', textDecoration: 'none' }}
                          key={pageKey}
                        >
                          <MenuItem>
                            <Typography>
                              {menuItem}
                            </Typography>
                          </MenuItem>
                        </Link>
                      )
                    }
                    return (
                      <Link to={pageUrl} style={{ color: '#000', textDecoration: 'none' }} key={pageKey}>
                        <MenuItem>
                          <Typography>
                            {menuItem}
                          </Typography>
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
              </>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;


