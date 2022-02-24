import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import About from './components/About/About';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home  />
      <About  />
      <Journey />
    </div>
  );
}

export default App;
