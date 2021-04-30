import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const CurrentLevel = () => {
  let currentLevel = 10;

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
            paddingTop: '0.2em'
          }}
        >
          {currentLevel}
        </Typography>
      </div>
    </>
  );
};

export default CurrentLevel;
