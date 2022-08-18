import './App.css';
import Hompage from './components/Hompage';
import About from './pages/About';
import Services from './pages/Services';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Hompage />
      <About />
      <Skills />
      <Services />
    </div>
  );
}

export default App;
