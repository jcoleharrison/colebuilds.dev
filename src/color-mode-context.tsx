import { createContext } from 'react';

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>(
  {
    // default value, will be overwritten in provider
    toggleColorMode: () => {},
  },
);