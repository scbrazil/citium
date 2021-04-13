import React, { useContext, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Button, Grid, IconButton, makeStyles, Menu, MenuItem, Switch, Typography, Toolbar, useMediaQuery, useTheme, withTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { AppProvider as setDarkMode } from '../context/context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1
    }
  },
  loginButton: {
    // marginRight: theme.spacing(2),
    justifyContent: 'flex-end'
  }
}))

const NavBar = (props) => {
  const { history } = props;
  console.log(history);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  console.log(isMobile);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClick = pageUrl => {
    history.push(pageUrl);
    setAnchorEl(null);
  }

  const handleLoginClick = pageUrl => {
    history.push(pageUrl)
  }

  const menuItems = [
    {
      menuItem: 'Home',
      pageUrl: '/',
      pageKey: 1
    },
    {
      menuItem: 'Login',
      pageUrl: '/login',
      pageKey: 2
    },
    {
      menuItem: 'Journal',
      pageUrl: '/journal',
      pageKey: 3
    },
    {
      menuItem: 'Favorite Quotes',
      pageUrl: '/favorite-quotes',
      pageKey: 4
    },
    {
      menuItem: 'About',
      pageUrl: '/About',
      pageKey: 5
    }
  ];

  return (
    <Grid container className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Grid item xs={1}>
          {isMobile ?
            <Typography variant='h6' className={classes.title}>
              Citium
            </Typography>
          :
            <Typography variant='h4' className={classes.title}>
              Citium
            </Typography>
          }
          </Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={1}>
            {/* <Switch checked={props.setDarkMode(true)} onChange={() => props.setDarkMode(false)} /> */}
            <div>
              {isMobile ?
                <>
                  <IconButton
                    edge='start'
                    className={classes.menuButton}
                    color='inherit'
                    aria-label='menu'
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id='menu-appbar'
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    {menuItems.map(item => {
                      const { menuItem, pageUrl, pageKey } = item;
                      return  (
                        <MenuItem onClick={() => handleMenuClick({pageUrl})} key={pageKey}>
                          {menuItem}
                        </MenuItem>
                      )
                    })}
                  </Menu>
                </>
              : (
                <Grid item className={classes.loginButton}>
                  <Button
                    className={classes.loginButton}
                    variant='contained'
                    onClick={() => handleLoginClick('/login')}
                  >
                    Login
                  </Button>
                </Grid>
              )}
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default withRouter(NavBar);
