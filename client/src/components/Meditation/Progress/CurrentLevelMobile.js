import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const CurrentLevel = () => {
  let currentLevel = 7;

  return (
    <>
      <div>
        <Typography
          align='center'
          style={{ fontSize: '16px', fontWeight: 'bold' }}
        >
          {`Level`}
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
          {currentLevel}
        </Typography>
      </div>
    </>
  );
};

export default CurrentLevel;
