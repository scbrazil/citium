import React, { useEffect, useState } from "react";
import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "4em",
    alignItems: "center",
  },
  cardStyles: {
    color: "#fff",
    backgroundColor: "#2d2d2d",
    padding: "0.8em 0.6em 1em 0.6em",
    opacity: "0.97",
    alignText: 'center'
    // margin: '5em 5em 5em 5em'
    // border: "1px solid",
    // paddingTop: '1em',
    // paddingBottom: '1em'
    // padding: "1em 1em 1em 1em",
    // textAlign: "center",
  },
  quoteText: {
    color: "#ffffff",
    fontSize: [17, "!important"],
    // alignText: 'center'
  },
  authorText: {
    color: "#ffffff",
    fontSize: [16, "!important"],
    fontStyle: "italic",
    textAlign: "right",
    paddingTop: "0.3em",
    paddingRight: "8em",
  },
}));

const DailyQuote = () => {
  const classes = useStyles();
  const [dailyQuote, setDailyQuote] = useState("");
  const [error, setError] = useState(null);
  const [mostWanted, setMostWanted] = useState([]);

  useEffect(() => {
    getQuote();
    // getMostWanted();
  }, []);

  async function getQuote() {
    try {
      const res = await axios.get("/random-quote");
      setDailyQuote(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  }

  async function getMostWanted() {
    try {
      const res = await axios.get("/mostwanted");
      setMostWanted(res.data);
    } catch (error) {
      console.log("Most wanted error: ", error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className={classes.root}>
      {/* <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}> */}
          <Card className={classes.cardStyles}>
            <div className={classes.quoteText}>
              <Typography
                // className={classes.quoteText}
                variant="subtitle1"
                align="center"
                lineHeight="50px"
              >
                {dailyQuote.text}
              </Typography>
            </div>
            <Typography className={classes.authorText} variant="subtitle2">
              - {dailyQuote.author}
            </Typography>
          </Card>
        {/* </Grid>
        <Grid item xs={3} />
      </Grid> */}
    </div>
  );
};

export default DailyQuote;
