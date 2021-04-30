import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from "../../../context/context.js";
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
      <div style={{ alignItems: 'center'}}>
        <div
          style={{
            width: '90%',
            paddingLeft: '0.2em'
          }}
        >
          <CircularProgressbarWithChildren
            value={percentage}
            minValue={0}
            maxValue={100}
            text={`${percentage}%`}
            styles={{
              root: {

              },
              path: {
                stroke: '#9292e1',
                strokeLinecap: 'round',
                transition: 'stroke-dashoffset 2s ease 0s',
              },
              text: {
                fill: '#fff',
                fontSize: '1em',
              },
            }}
          ></CircularProgressbarWithChildren>
        </div>
      </div>
    </>
  );
};

export default LevelProgress;
