import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { AppProvider } from './context/context.js';
import './styles.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('app')
);
