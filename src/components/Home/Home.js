import './Home.css'
import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from "react-text-transition";

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


    return (
        <div className="container section">
            <div className="intro">
                <h1>Hi,</h1>
                <p>I'm Mohammad Afsari </p>
                <h2><TextTransition
                    text={ messages[index % messages.length] }
                    springConfig={ presets.wobbly }
                    noOverflow= {true}
                /></h2>
            </div>
            <div className="profilePic"></div>
        </div>
        );
    };
    

 
export default Home;