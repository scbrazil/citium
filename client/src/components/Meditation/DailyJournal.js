import React, { useContext } from "react";
import { AppContext } from "../../context/context.js";
import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
  },
  cardStyles: {
    backgroundColor: "#5e607e",
    height: "18em",
    margin: "0em 1em 1em 1em",
    padding: "0.5em 1.5em 0.5em 1.5em",
  },
}));

const DailyJournal = () => {
  const classes = useStyles();
  const { submittedEntry } = useContext(AppContext);

  let entry = localStorage.getItem("journalEntry");

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paperStyles}> */}
      <Card className={classes.cardStyles}>
        <div>
          <Typography variant="h6" align="center" style={{ color: "#fff" }}>
            Your Meditation
          </Typography>
        </div>
        <div style={{ paddingTop: '1em' }}>
          <Typography
            variant="subtitle1"
            align="left"
            style={{ color: "#fff" }}
          >
            {entry}
          </Typography>
        </div>
      </Card>
      {/* </Paper> */}
    </div>
  );
};

export default DailyJournal;
