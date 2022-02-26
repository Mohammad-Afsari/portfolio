import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './components/Contact/Contact';


function App() {
  useEffect(() => {
    aos.init({duration: 2200});
  }, [])


  return (
    <div className="App">
        <Navbar />
        <Home  />
        <div id="about"></div>
        <About />
        <div id='journey'></div>
        <h1 className='pageHeader journeyHeader' data-aos="fade-up" >The Journey so far...</h1>
        <Journey />
        <div id='projects'></div>
        <h1 className='pageHeader projectsHeader' data-aos="fade-up" >Projects</h1>
        <Projects />
        <div id="skills"></div>
        <h1 className="pageHeader" data-aos="fade-up">Skill Stack</h1>
        <Skills />
        <div id="contact"></div>
        <h1 className="pageHeader" data-aos="fade-up">Contact</h1>
        <Contact />
    </div>
  );
}

export default App;
