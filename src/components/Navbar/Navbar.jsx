import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { GiTrail } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import { useScroll } from "../../store/useScroll";
import aos from "aos";
import "aos/dist/aos.css";
import Scroll from "../Scroll/Scroll";

const Navbar = () => {
  // Local state
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionHome, setScrollPositionHome] = useState();
  const [scrollPositionAbout, setScrollPositionAbout] = useState();
  const [navbarLoad, setNavbarLoad] = useState();
  const [ifNavload, setIfnavload] = useState(false);
  const [ifScrollload, setIfScrollload] = useState(); // Optional

  // Global state
  const { homeScroll } = useScroll();
  const { aboutScroll } = useScroll();
  const { journeyScroll } = useScroll();
  const { projectsScroll } = useScroll();
  const { skillsScroll } = useScroll();
  const { contactScroll } = useScroll();

  // Optional
  useEffect(() => {
    setTimeout(() => {
      setIfScrollload(true);
    }, 1000);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    // Optional
    if (scrollPosition >= 200) {
      setIfScrollload(false);
    } else {
      setIfScrollload(true);
    }

    if ((scrollPosition >= homeScroll) & (scrollPosition < aboutScroll - 300)) {
      setActiveNav("#home");
      setScrollPositionHome("#home");
    } else if (
      (scrollPosition >= aboutScroll - 300) &
      (scrollPosition < journeyScroll - 300)
    ) {
      setActiveNav("#about");
      setScrollPositionAbout("#about");
    } else if (
      (scrollPosition >= journeyScroll - 300) &
      (scrollPosition < projectsScroll - 300)
    ) {
      setActiveNav("#journey");
    } else if (
      (scrollPosition >= projectsScroll - 300) &
      (scrollPosition < skillsScroll - 300)
    ) {
      setActiveNav("#projects");
    } else if (
      (scrollPosition >= skillsScroll - 300) &
      (scrollPosition < contactScroll - 300)
    ) {
      setActiveNav("#skills");
    } else if (
      (scrollPosition >= contactScroll - 300) &
      (scrollPosition < 10000)
    ) {
      setActiveNav("#contact");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setNavbarLoad("fade-up");
      setIfnavload(true);
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, activeNav]);

  return (
    <>
      ({/* Optional */}
      {ifScrollload && (
        <div>
          <Scroll />
        </div>
      )}
      )
      {ifNavload && (
        <nav className="nav-container" data-aos={navbarLoad}>
          <a
            href={scrollPositionHome}
            id="menuItem"
            className={activeNav === "#home" ? "active" : ""}
            onClick={() => setActiveNav("#home")}
          >
            <AiOutlineHome />
          </a>
          <a
            href={scrollPositionAbout}
            id="menuItem"
            onClick={() => {
              setActiveNav("#about");
            }}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#journey"
            id="menuItem"
            onClick={() => setActiveNav("#journey")}
            className={activeNav === "#journey" ? "active" : ""}
          >
            <GiTrail />
          </a>
          <a
            href="#projects"
            id="menuItem"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
          <a
            href="#skills"
            id="menuItem"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#skills" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#contact"
            id="menuItem"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <TiContacts />
          </a>
        </nav>
      )}
    </>
  );
};

export default Navbar;
