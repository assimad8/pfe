import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function LandingPage() {
  const defaultTheme = createTheme({ palette: { "mode":'light'} });

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box 
      sx={{
        width: '100%',
      }}
      >
      <AppAppBar mode={'light'} />
      <Outlet />
      <Footer />
      </Box>
    </ThemeProvider>
  );
}