import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto Condensed',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#1D1A18'
    },
    secondary: {
      main: '#F1F0ED'
    }
  },
}) 

export default theme;

