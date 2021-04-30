
import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const CurrentStreak = () => {
  let consecutiveDays = 12;

  return (
    <>
      <div>
        <Typography
          align='center'
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
          {`Streak`}
        </Typography>
      </div>
      <div>
        <Typography
          align='center'
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >
          {consecutiveDays}
        </Typography>
      </div>
      <div>
        <Typography
          align='center'
          style={{
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          DAYS
        </Typography>
      </div>
    </>
  );
};

export default CurrentStreak;
