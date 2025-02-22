import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Inter,Roboto',
    h2: {
      fontSize: '1.87rem',
      fontWeight: 700,
      color: '#4e4d4e',
    },
    h3: {
      color: '#3b6695',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.875rem',
    },
  },
});

export default theme;
