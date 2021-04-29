import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { AppContext } from "../../context/context.js";
import { Card, Grid, makeStyles, Paper } from "@material-ui/core";
import DailyJournal from "./DailyJournal.js";
import DailyQuote from "./DailyQuote";
import Ambience from "./Ambience.js";

const useStyles = makeStyles((theme) => ({
  root: {
    align: "center",
    height: "100vh",
  },
  paperStyles: {
    color: "#fff",
    // backgroundColor: '#2d2d2d',
    background:
      "linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.3), 0.1%, #25262c, 97%, rgba(21.6, 18.4, 40.8, 0.3))",
    margin: "6em 0em 2em 0em",
    padding: "2em 1em 1em 1em",
    opacity: "0.97",
  },
  quote: {
    align: "center",
  },
  lowerPaper: {
    marginTop: "4em",
  },
}));

const Meditation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={1} md={1} />
        <Grid item xs={10} md={10}>
          <Paper className={classes.paperStyles}>
            <Grid container>
              <Grid item xs={12} style={{ align: 'center' }}>
              <DailyQuote />
              </Grid>
            </Grid>
            <div>
              <Grid
                container
                direction="row"
                spacing={2}
                className={classes.lowerPaper}
              >
                <Grid item xs={12} md={6}>
                  <DailyJournal />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Ambience />
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1} md={1} />
      </Grid>
    </div>
  );
};

export default Meditation;
