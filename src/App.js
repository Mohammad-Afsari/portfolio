import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Icebreaker from './components/Icebreaker/Icebreaker';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Icebreaker /> */}
      <About />
    </div>
  );
}

export default App;
