import React from "react";
import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    marginRight: "100px",
  },
  timerText: {
    color: "#ffffff",
    alignText: "center",
  },
}));

const Timer = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <Grid item xs={1} />
      <Grid item xs={10}>
        <Card className={classes.cardStyle}>TIMER</Card>
      </Grid>
      <Grid item xs={1} /> */}
      <Grid item xs={12}>
        <Typography className={classes.timerText} variant="h6">
          TIMER
        </Typography>
      </Grid>
    </div>
  );
};

export default Timer;
