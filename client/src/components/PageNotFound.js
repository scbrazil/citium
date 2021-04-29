import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "6.5em",
    height: "100vh",
  },
  mainContainer: {
    color: "#fff",
    // backgroundColor: '#2d2d2d',
    background:
      "linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.2), 0.1%, #25262c, 95%, rgba(21.6, 18.4, 40.8, 0.2))",
    elevation: "0",
    padding: "1em 2em 2em 2em",
    opacity: "0.95",
  },
  body: {
    fontAlign: 'center',
    padding: "1em",
  },
}));

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="row">
        <Grid item xs={1} sm={3} />
        <Grid item xs={10} sm={6}>
          <Paper className={classes.mainContainer}>
            <Typography className={classes.body}>
              404 - Page Not Found
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={3} />
      </Grid>
    </div>
  );
};

export default PageNotFound;
