import './Skills.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiPowerbi } from 'react-icons/si'
import { RiFileExcel2Fill } from 'react-icons/ri'
import { SiGit } from 'react-icons/si'
import { SiJest } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { MdOutlineVideoSettings } from 'react-icons/md'
import { SiAcademia } from 'react-icons/si'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Skills = () => {
    useEffect(() => {
        aos.init({duration: 2200});
      }, [])

    return ( 
        <div className="skillsContainer">
            <section className="front-end" data-aos="fade-up">
                <h2>Front-End</h2>
                <div className="front-end skillItem"><SiHtml5 /> <span>HTML5</span></div>
                <div className="front-end skillItem"><SiCss3 /> <span>CSS3</span></div>
                <div className="front-end skillItem"><SiJavascript /> <span>JavaScript</span></div>
                <div className="front-end skillItem"><SiBootstrap /> <span>Bootstrap</span></div>
                <div className="front-end skillItem"><SiReact/> <span>React (Incl. Hooks)</span></div>
                <div className="front-end skillItem"><SiTypescript /> <span>TypeScript (Learning)</span></div>
            </section>
            <section className="back-end" data-aos="fade-up">
                <h2>Back-End</h2>
                <div className="back-end skillItem"><SiPostgresql /><span>T-SQL and PostgreSQL</span></div>
                <div className="back-end skillItem"><SiNodedotjs /><span>NodeJS, ExpressJS (Learning)</span></div>
                <div className="back-end skillItem"><SiMongodb /><span>MongoDB (Learning)</span></div>
            </section>
            <section className="data-analysis" data-aos="fade-up">
                <h2>Data Analysis</h2>
                <div className="data-analysis skillItem"><SiPython /><span>Python</span></div>
                <div className="data-analysis skillItem"><SiPowerbi /> <span>PowerBI</span></div>
                <div className="data-analysis skillItem"><RiFileExcel2Fill /><span>Microsoft Excel</span></div>
            </section>
            <section className="tools" data-aos="fade-up">
                <h2>Tools</h2>
                <div className="tools skillItem"><SiGit /> <span>Git</span></div>
                <div className="tools skillItem"><SiJest /><span>Jest</span></div>
                <div className="tools skillItem"><SiNetlify /><span>Netlify</span></div>
                <div className="tools skillItem"><SiAcademia /> <span>AutoCAD</span></div>
                <div className="tools skillItem"><MdOutlineVideoSettings /><span>Sony Vegas Pro</span></div>
            </section>
        </div>
     );
}
 
export default Skills;