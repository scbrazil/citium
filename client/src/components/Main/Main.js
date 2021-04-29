import React, { Component, Fragment, useContext, useState } from 'react';
import { AppContext } from '../../context/context.js';
import Link from 'react-router-dom';
import { Card, Grid, makeStyles, Modal } from '@material-ui/core';
import JournalForm from './JournalForm.js';
import LoginRegistrationModal from '../LoginRegistration/LoginRegistration.js';

const useStyles = makeStyles((theme) => ({
  homeStyles: {
    align: 'center',
  },
  cards: {
    alignItems: 'center',
    align: 'center',
  },
}));

const Main = (props) => {
  const classes = useStyles();
  const { entrySubmittedStatus } = useContext(AppContext);

  return (
    <div className={classes.cards}>
      <Grid
        container
        className={classes.homeStyles}
        // spacing={3}
        direction='row'
      >
        {/* <Grid item xs={12} container>
          <DailyQuote />
        </Grid> */}
        {/* {!entrySubmittedStatus ? ( */}
          <>
            <Grid item xs={1} sm={3} className={classes.gridTesting} />
            <Grid item xs={10} sm={6} className={classes.cards}>
              <Grid item className={classes.gridCenterTesting}>
                <JournalForm />
              </Grid>
            </Grid>
            <Grid item xs={1} sm={3} className={classes.gridTesting} />
          </>
        {/* ) : (
          <>
            <Grid container>
              <Grid item xs={1} sm={3} />
              <Grid item xs={10} sm={6}>
                <DailyQuote />
              </Grid>
              <Grid item xs={1} sm={3} />
            </Grid>
            <Grid container>
              <Grid item xs={1} />
              <Grid item xs={5}>
                <DailyJournal />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={4} />
              <Grid item xs={1} />
            </Grid>
          </>
        )} */}
      </Grid>
    </div>
  );
};

export default Main;
