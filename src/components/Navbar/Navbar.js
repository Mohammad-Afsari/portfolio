import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { GiTrail } from "react-icons/gi";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionHome, setScrollPositionHome] = useState();
  const [scrollPositionAbout, setScrollPositionAbout] = useState();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if ((scrollPosition >= 0) & (scrollPosition < 400)) {
      setActiveNav("#home");
      setScrollPositionHome("#home");
    } else if ((scrollPosition >= 400) & (scrollPosition < 1100)) {
      setActiveNav("#about");
      setScrollPositionAbout("#about");
    } else if ((scrollPosition >= 1100) & (scrollPosition < 2400)) {
      setActiveNav("#journey");
    } else if ((scrollPosition >= 2400) & (scrollPosition < 4000)) {
      setActiveNav("#projects");
    } else if ((scrollPosition >= 4000) & (scrollPosition < 5400)) {
      setActiveNav("#skills");
    } else if ((scrollPosition >= 5400) & (scrollPosition < 7000)) {
      setActiveNav("#contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className="nav-container">
      <a
        // href="#home"
        href={scrollPositionHome}
        id="menuItem"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setActiveNav("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        // href="#about"
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
      {/* ================================================== TEST ================================================== */}
      {/* <HashLink to="/some/path#with-hash-fragment">
        Link to Hash Fragment
      </HashLink>

      <Link
        id="menuItem"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
        to="/"
      >
        <AiOutlineHome />
      </Link>
      <Link
        id="menuItem"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        to="/about"
      >
        <AiOutlineUser />
      </Link>
      <Link
        id="menuItem"
        onClick={() => setActiveNav("#journey")}
        className={activeNav === "#journey" ? "active" : ""}
        to="/journey"
      >
        <GiTrail />
      </Link>
      <Link
        id="menuItem"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
        to="/projects"
      >
        <RiServiceLine />
      </Link>
      <Link
        id="menuItem"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        to="/skills"
      >
        <BiBook />
      </Link>
      <Link
        id="menuItem"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        to="/contact"
      >
        <TiContacts />
      </Link> */}
    </nav>
  );
};

export default Navbar;
