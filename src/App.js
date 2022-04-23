import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/theme"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Coaching from './components/Coaching';
import Contact from './components/Contact';

const App = () => {
  return (
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
  )
}

export default App;

