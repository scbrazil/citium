import React, { useContext } from "react";
import { AppContext } from "../../context/context.js";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CurrentLevel from "./Progress/CurrentLevel.js";
import LevelProgress from "./Progress/LevelProgress.js";
import CurrentStreak from "./Progress/CurrentStreak.js";

const Progress = () => {


  return (
    <Grid container>
      <Grid item xs={4} style={{}}>
        <CurrentLevel />
      </Grid>
      <Grid
        item
        xs={4}
        style={{
          alignItems: "center",
        }}
      >
        <LevelProgress />
      </Grid>
      <Grid
        item
        xs={4}
        style={{ alignItems: "center", padding: "0em, 2em, 0em, 2em" }}
      >
        <CurrentStreak />
      </Grid>
    </Grid>
  );
};

export default Progress;
