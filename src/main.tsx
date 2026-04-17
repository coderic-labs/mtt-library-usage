import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClientSideTableDemo } from './demoComponents';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976D2' },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ClientSideTableDemo />
      </ThemeProvider>
    </LocalizationProvider>
  </StrictMode>,
);
