import "./Home.css";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import profilePicCroppedHD from "../imgs/profilePicCroppedHD.jpg";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import aos from "aos";
import "aos/dist/aos.css";

const messages = ["Front End Developer", "Engineer", "Analyst"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="container section" data-aos="fade-up" id="home">
      <div className="intro">
        <div className="welcome">
          <h1>Hi,</h1>
          <p>I'm Mohammad Afsari </p>
          <h2>
            <TextTransition
              className="transition-text"
              text={messages[index % messages.length]}
              springConfig={presets.wobbly}
              noOverflow={true}
            />
          </h2>
          <section className="links">
            <p>
              <a href="#contact">
                <MdEmail className="link-item" />
              </a>
            </p>
            <p>
              <a
                href="https://github.com/Mohammad-Afsari"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="link-item" />
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/mohammad-afsari-77432b7b/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin className="link-item" />
              </a>
            </p>
          </section>
        </div>
      </div>
      <div className="pictureContainer">
        <img className="profilePic" src={profilePicCroppedHD} alt="" />
      </div>
    </section>
  );
};

export default Home;
