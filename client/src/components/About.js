import React from "react";
import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "6.5em",
    height: "100vh",
  },
  aboutContainer: {
    color: "#fff",
    // backgroundColor: '#2d2d2d',
    background:
      "linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.2), 0.1%, #25262c, 95%, rgba(21.6, 18.4, 40.8, 0.2))",
    elevation: "0",
    padding: "1em 2em 2em 2em",
    opacity: "0.95",
    margin: "0em 0em 4em 0em",
  },
  aboutBody: {
    padding: "1em",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={1} sm={3} />
        <Grid item xs={10} sm={6}>
          <Paper className={classes.aboutContainer}>
            <Typography className={classes.aboutBody} variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
            <Typography className={classes.aboutBody} variant="body1">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={3} />
      </Grid>
    </div>
  );
};

export default About;
