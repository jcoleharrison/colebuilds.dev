import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Inter,Roboto',
    fontSize: 16, // Base font size (default is 14)
    h2: {
      fontSize: '2.1rem', // Increased from 1.87rem
      fontWeight: 700,
      color: '#4e4d4e',
    },
    h3: {
      color: '#3b6695',
      fontWeight: 700,
      fontSize: '1.7rem', // Increased from 1.5rem
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem', // Increased from 0.875rem
    },
    body1: {
      fontSize: '1.1rem', // Slightly larger body text
    },
    body2: {
      fontSize: '1rem', // Slightly larger secondary body text
    },
  },
});

export default theme;
