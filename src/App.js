import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme"
import Home from './components/Home';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App;
