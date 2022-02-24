import './Home.css'
import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from "react-text-transition";
import profilePicCroppedHD from '../imgs/profilePicCroppedHD.jpg'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

const messages = [
  "Data Analyst",
  "Engineer",
  "Front End Developer",
  "Student"
];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    useEffect(() => {
      AOS.init({duration: 3000});
      }, [])

    return (
        <div className="container section" data-AOS="fade-up">
            <div className="intro">
              <div className='welcome'>
                <h1>Hi,</h1>
                <p>I'm Mohammad Afsari </p>
                <h2><TextTransition
                    className='transition-text'
                    text={ messages[index % messages.length] }
                    springConfig={ presets.wobbly }
                    noOverflow= {true}
                    />
                </h2>
                <section className='links'>
                  <p><a href="#mail"><MdEmail className='link-item'/></a></p>
                  <p><a href="github"><SiGithub className='link-item' /></a></p>
                  <p><a href="linkedin"><SiLinkedin className='link-item'/></a></p>
                </section>
              </div>
            </div>
            <div className='pictureContainer'>
              <img className='profilePic' src={profilePicCroppedHD} alt="" />
            </div>
        </div>
        );
    };
    

 
export default Home;