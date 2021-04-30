import React, { useContext } from "react";
import { AppContext } from "../../context/context.js";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CurrentLevelMobile from "./Progress/CurrentLevelMobile.js";
import LevelProgressMobile from "./Progress/LevelProgressMobile.js";
import CurrentStreakMobile from "./Progress/CurrentStreakMobile.js";

const ProgressMobile = () => {

  return (
    <Grid container style={{ marginTop: '-4em'}}>
      <Grid item xs={4} style={{}}>
        <CurrentLevelMobile />
      </Grid>
      <Grid
        item
        xs={4}
        style={{
          alignItems: "center",
        }}
      >
        <LevelProgressMobile />
      </Grid>
      <Grid
        item
        xs={4}
        style={{ alignItems: "center", padding: "0em, 2em, 0em, 2em" }}
      >
        <CurrentStreakMobile />
      </Grid>
    </Grid>
  );
};

export default ProgressMobile;
