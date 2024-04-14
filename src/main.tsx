import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#906DFE',
    },
    secondary: {
      main: '#FFB70F',
    },
    background: {
      default: '#010101',
    },
    text: {
      primary: '#FFF',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
