import { createTheme } from '@mui/material/styles';

// Generate a light or dark theme based on the supplied mode
export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      // You can customize default background colours if desired
      ...(mode === 'light'
        ? {
            background: {
              default: '#fafafa',
              paper: '#ffffff',
            },
          }
        : {
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          }),
    },
    typography: {
      fontFamily: 'Inter,Roboto',
      h2: {
        fontSize: '1.87rem',
        fontWeight: 700,
        // Use a colour appropriate for the current mode
        color: mode === 'light' ? '#4e4d4e' : '#eeeeee',
      },
      h3: {
        fontWeight: 700,
        fontSize: '1.5rem',
        color: mode === 'light' ? '#3b6695' : '#90caf9',
      },
      h6: {
        fontWeight: 700,
        fontSize: '0.875rem',
      },
    },
  });
