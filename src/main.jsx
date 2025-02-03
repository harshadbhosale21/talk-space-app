import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.js';
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </>
)
