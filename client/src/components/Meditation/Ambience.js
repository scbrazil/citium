import React from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
  },
  cardStyles: {
    backgroundColor: '#5e607e',
    height: '18em',
    margin: '0em 1em 1em 1em',
    padding: '0.5em 1.5em 0.5em 1.5em'
  },
}))

const Ambience = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyles}>

      </Card>
    </div>
  )
}

export default Ambience;