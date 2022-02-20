import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <ParticlesBackground />
      </div>
      <div className='test1'>hello</div>
      <p>dog</p>
    </div>
  );
}

export default App;
