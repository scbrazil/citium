import React, { useEffect, useState } from "react";
import { Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   marginTop: '4em',
  //   alignItems: 'center',
  // },
  // cardStyles: {
  //   color: '#fff',
  //   // backgroundColor: '#2d2d2d',
  //   background:
  //     'linear-gradient(to bottom right, rgba(6.3, 15.5, 40.8, 0.3), 0.1%, #25262c, 97%, rgba(21.6, 18.4, 40.8, 0.3))',
  //   padding: '0.8em 0.6em 1em 0.6em',
  //   opacity: '0.97',
  //   alignText: 'center',
  //   // margin: '5em 5em 5em 5em'
  //   // border: '1px solid',
  //   // paddingTop: '1em',
  //   // paddingBottom: '1em'
  //   // padding: '1em 1em 1em 1em',
  //   // textAlign: 'center',
  // },
  quoteText: {
    color: "#ffffff",
    fontSize: [17, "!important"],
    // alignText: "center",
  },
  authorText: {
    color: "#ffffff",
    fontSize: [16, "!important"],
    fontStyle: "italic",
    textAlign: "right",
    paddingTop: "0.3em",
    paddingRight: "1em",
  },
}));

const DailyQuote = () => {
  const classes = useStyles();
  const [dailyQuote, setDailyQuote] = useState("");
  const [error, setError] = useState(null);
  const [mostWanted, setMostWanted] = useState([]);

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    try {
      const res = await axios.get("/stoic-quote");
      setDailyQuote(res.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <div className={classes.quoteText}>
            <Typography
              align="center"
              fontSize="20px"
            >
              {dailyQuote.text}
            </Typography>
          </div>
          <Typography className={classes.authorText} style={{ fontSize: '16px' }}>
            - {dailyQuote.author}
          </Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default DailyQuote;
