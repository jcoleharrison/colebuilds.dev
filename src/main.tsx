import { StrictMode, useMemo, useState, FC } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from './theme.tsx';
import { ColorModeContext } from './color-mode-context';

const Root: FC = () => {
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [mode, setMode] = useState<'light' | 'dark'>(prefersDark ? 'dark' : 'light');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const colorMode = {
    toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);

// Register the PWA service worker for offline caching and faster subsequent loads
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.error('Service worker registration failed:', err);
    });
  });
}
