import { createTheme } from '@mui/material/styles';

// A custom theme for this app with modern, sleek design
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Modern blue
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#7c3aed', // Purple accent
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '-0.005em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 8px 16px rgba(0,0,0,0.05)',
    '0px 12px 24px rgba(0,0,0,0.05)',
    '0px 16px 32px rgba(0,0,0,0.05)',
    '0px 20px 40px rgba(0,0,0,0.06)',
    '0px 24px 48px rgba(0,0,0,0.07)',
    '0px 28px 56px rgba(0,0,0,0.08)',
    '0px 32px 64px rgba(0,0,0,0.09)',
    '0px 36px 72px rgba(0,0,0,0.1)',
    '0px 40px 80px rgba(0,0,0,0.11)',
    '0px 44px 88px rgba(0,0,0,0.12)',
    '0px 48px 96px rgba(0,0,0,0.13)',
    '0px 52px 104px rgba(0,0,0,0.14)',
    '0px 56px 112px rgba(0,0,0,0.15)',
    '0px 60px 120px rgba(0,0,0,0.16)',
    '0px 64px 128px rgba(0,0,0,0.17)',
    '0px 68px 136px rgba(0,0,0,0.18)',
    '0px 72px 144px rgba(0,0,0,0.19)',
    '0px 76px 152px rgba(0,0,0,0.2)',
    '0px 80px 160px rgba(0,0,0,0.21)',
    '0px 84px 168px rgba(0,0,0,0.22)',
    '0px 88px 176px rgba(0,0,0,0.23)',
    '0px 92px 184px rgba(0,0,0,0.24)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
});

export default theme;
