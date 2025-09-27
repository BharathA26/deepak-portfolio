import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3C2D7A' },
    secondary: { main: '#009A90' },
    accent: { main: '#774399' },
    background: { default: '#F7F5FF' },
    text: { primary: '#111827' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          ':focus-visible': {
            outline: '3px solid rgba(119, 67, 153, 0.5)',
            outlineOffset: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'box-shadow 200ms ease',
          ':hover': {
            boxShadow: '0 8px 24px rgba(119, 67, 153, 0.15)',
          },
        },
      },
    },
  },
});
