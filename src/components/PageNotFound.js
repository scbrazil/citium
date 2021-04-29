import React from "react";
import { Grid } from "@material-ui/core";

const PageNotFound = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={3} />
      <Grid item xs={6}>
        404 - Page not found.
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default PageNotFound;
