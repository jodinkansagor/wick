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
      main: '#3b3730'
    },
    secondary: {
      main: '#f2ebe1'
    }
  },
}) 

export default theme;