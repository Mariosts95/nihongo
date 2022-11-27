import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const mainTheme = responsiveFontSizes(
  createTheme({
    spacing: 8,
    typography: {
      fontFamily: 'Noto Sans, sans-serif',
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
  })
);

const lightTheme = createTheme({
  ...mainTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#1d3557',
    },
    secondary: {
      main: '#a8dadc',
    },
  },
});

const darkTheme = createTheme({
  ...mainTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#a8dadc',
    },
    secondary: {
      main: '#f1faee',
    },
    background: {
      default: '#1d3557',
    },
  },
});

export { lightTheme, darkTheme };
