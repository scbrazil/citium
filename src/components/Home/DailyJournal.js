import React, { useContext} from 'react';
import { AppContext } from '../../context/context.js';
import {
  Card,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff'
  },
  cardStyles: {

  },
  paperStyles: {
    color: '#fff',
    backgroundColor: '#2d2d2d',
    opacity: '0.97',
    minHeight: '15em',
    lineheight: '1'
    // padding: '1em 0.5em 1em 0.5em'
  }
}))

const DailyJournal = () => {
  const classes = useStyles();
  const { submittedEntry } = useContext(AppContext);

  return (
    <div className={classes.root}>
      {/* <Paper className={classes.paperStyles}> */}
        <Card>
          {/* <Typography>{submittedEntry}</Typography> */}
        </Card>
      {/* </Paper> */}
    </div>
  )
}

export default DailyJournal;
