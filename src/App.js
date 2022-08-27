import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <div className="App container">
        <Navigation />
      </div>

      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="about" element={<About />}></Route>
        <Route exact path="contact" element={<Contact />}></Route>
        <Route exact path="services" element={<Services />}></Route>
        <Route exact path="skills" element={<Skills />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
