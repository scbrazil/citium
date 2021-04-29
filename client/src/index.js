import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { AppProvider } from './context/context.js';
import { AuthProvider } from './context/authContext.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from "./Theme.js";
import { CssBaseline } from "@material-ui/core/";
import './styles.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <AuthProvider>
    <AppProvider>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AppProvider>,
  </AuthProvider>,
  document.getElementById('app')
);
