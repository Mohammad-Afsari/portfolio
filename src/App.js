import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home  />
      <About  />
      <Journey />
      <Projects />
    </div>
  );
}

export default App;
