import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import ResponsiveDrawer from './components/screens/Admin/AdminDashboard'
//import LoginScreen from './components/screens/LoginScreen';
import theme from './theme.js'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
    </ThemeProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
