import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";
import { GraphicEqIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginTop: '1em'
  },
  cardStyles: {
    backgroundColor: "#5e607e",
    // height: '14em',
    margin: "0em 1em 1em 1em",
    padding: "0.5em 1.5em 0.5em 1.5em",
  },
  icons: {
    color: '#fff ',
    fontSize: "2.5em",
    // padding: '1em 0em 1em 0em',
    margin: '0.2em 0em 0.2em 0em'
  },
}));

const Ambience = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyles}>
        <Grid
          container
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          <Grid container direction="row">
            <Grid
              item
              xs={6}
              className="material-icons"
              style={{
                fontSize: "24px",
              }}
            >
              <div className={classes.icons}>graphic_eq</div>
            </Grid>
            <Grid item xs={6} className="material-icons">
              <div className={classes.icons}>park</div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={6} className="material-icons">
              <div className={classes.icons}>water</div>
            </Grid>
            <Grid item xs={6} className="material-icons">
              <div className={classes.icons}>air</div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Ambience;

/*

Material Icons

water
park (tree)
graphic_eq (white noise)
lens_blur (white noise)
air

*/
