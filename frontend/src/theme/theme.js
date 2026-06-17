import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#4F6F52' },
    secondary: { main: '#739072' },
    background: { default: '#F8F7F4', paper: '#FFFFFF' },
    text: { primary: '#2F3E2F', secondary: '#5E6B5E' },
    success: { main: '#5C8D5E' },
    error: { main: '#C75C5C' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
