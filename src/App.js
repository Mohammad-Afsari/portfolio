import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Journey from "./components/Journey/Journey";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Introduction from "./components/Introduction/Introduction";
import { useScroll } from "./store/useScroll";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Global state
  const { setHomeScroll } = useScroll();
  const { setAboutScroll } = useScroll();
  const { setJourneyScroll } = useScroll();
  const { setProjectsScroll } = useScroll();
  const { setSkillsScroll } = useScroll();
  const { setContactScroll } = useScroll();

  // Local state
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [navload, setNavload] = useState(false);

  useEffect(() => {
    aos.init({ duration: 2200 });
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    setHomeScroll(homeRef.current.offsetTop);
    setAboutScroll(aboutRef.current.offsetTop);
    setJourneyScroll(journeyRef.current.offsetTop);
    setProjectsScroll(projectsRef.current.offsetTop);
    setSkillsScroll(skillsRef.current.offsetTop);
    setContactScroll(contactRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    window.scrollTo(0, 0);
    navbarLoad();
  }, []);

  const navbarLoad = () => {
    setTimeout(() => {
      setNavload(true);
    }, 500);
  };

  return (
    <div className="App">
      {navload && <Navbar />}
      <div ref={homeRef}></div>
      <Home />
      <div id="about" ref={aboutRef}></div>
      <h1 className="pageHeader journeyHeader">
        About Me
      </h1>
      <Introduction />
      <div id="journey" ref={journeyRef}></div>
      <h1 className="pageHeader journeyHeader">
        My journey...
      </h1>
      <Journey />
      <div id="projects" ref={projectsRef}></div>
      <h1 className="pageHeader projectsHeader">
        Projects
      </h1>
      <Projects />
      <div id="skills" ref={skillsRef}></div>
      <h1 className="pageHeader">
        Skill Stack
      </h1>
      <Skills />
      <div id="contact" ref={contactRef}></div>
      <h1 className="pageHeader">
        Contact
      </h1>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
