import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const LevelProgress = () => {
  let percentage = 65;

  return (
    <>
      <div>
        <Typography
          align='center'
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            paddingBottom: '0.2em',
          }}
        >
          Next Level
        </Typography>
      </div>
      <div style={{ alignItems: 'center' }}>
        <div
          style={{
            width: '100%',
            alignItems: 'center',
            align: 'center',
            paddingLeft: '0.05em'
          }}
        >
          <CircularProgressbarWithChildren
            value={percentage}
            minValue={0}
            maxValue={100}
            text={`${percentage}%`}
            styles={{
              root: {
                // width: '3em',
                // paddingLeft: '2.8em'
              },
              path: {
                stroke: '#9292e1',
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 2s ease 0s',
              },
              text: {
                fill: '#fff',
                fontSize: '1.75em',
              },
            }}
          ></CircularProgressbarWithChildren>
        </div>
      </div>
    </>
  );
};

export default LevelProgress;
