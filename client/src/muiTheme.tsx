import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f00'
    },
    secondary: {
      main: '#0f0'
    }
  }
})

export default theme;