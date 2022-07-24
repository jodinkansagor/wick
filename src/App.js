import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home';
import About from './components/About/About';
import Coaching from './components/Coaching/Coaching';
import Contact from './components/Contact/Contact';
import { ContextProvider } from './components/context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <div>
          <Router>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </ContextProvider>
  )
}

export default App;

