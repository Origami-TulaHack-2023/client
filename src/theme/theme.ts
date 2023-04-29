import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Exo, sans-serif',
  },
  palette: {
    primary: {
      main: '#EF8D91',
    },
    secondary: {
      main: '#A6E6E6',
    },
    text: {
      primary: '#2C244E',
      secondary: '#363F57',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          height: '100%',
        },
      },
    },
  },
})
