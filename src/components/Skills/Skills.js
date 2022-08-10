import "./Skills.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiMicrosoftaccess } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGit } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { MdOutlineVideoSettings } from "react-icons/md";
import { SiAcademia } from "react-icons/si";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="skillsContainer">
      <section className="front-end" data-aos="fade-up">
        <h2>Front-End</h2>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiHtml5 /> <span>HTML5</span>
        </div>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiCss3 /> <span>CSS3</span>
        </div>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiJavascript /> <span>JavaScript</span>
        </div>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiTypescript /> <span>TypeScript</span>
        </div>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiBootstrap /> <span>Bootstrap</span>
        </div>
        <div className="front-end skillItem" data-aos="fade-up">
          <SiMaterialui /> <span>Material UI</span>
        </div>

        <div className="front-end skillItem" data-aos="fade-up">
          <SiReact /> <span>React (Incl. Hooks)</span>
        </div>
      </section>
      <section className="back-end" data-aos="fade-up">
        <h2>Back-End</h2>
        <div className="back-end skillItem" data-aos="fade-up">
          <DiMsqlServer />
          <span>SQL Server (T-SQL)</span>
        </div>
        <div className="back-end skillItem" data-aos="fade-up">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="back-end skillItem" data-aos="fade-up">
          <SiSupabase />
          <span>Supabase</span>
        </div>
      </section>
      <section className="data-analysis" data-aos="fade-up">
        <h2>Data Analysis</h2>
        <div className="data-analysis skillItem" data-aos="fade-up">
          <SiPython />
          <span>Python</span>
        </div>
        <div className="data-analysis skillItem" data-aos="fade-up">
          <SiPowerbi /> <span>PowerBI</span>
        </div>
        <div className="data-analysis skillItem" data-aos="fade-up">
          <RiFileExcel2Fill />
          <span>Microsoft Excel</span>
        </div>
        <div className="data-analysis skillItem" data-aos="fade-up">
          <SiMicrosoftaccess />
          <span>Microsoft Access</span>
        </div>
      </section>
      <section className="tools" data-aos="fade-up">
        <h2>Tools</h2>
        <div className="tools skillItem" data-aos="fade-up">
          <SiGit /> <span>Git</span>
        </div>
        <div className="tools skillItem" data-aos="fade-up">
          <SiJest />
          <span>Jest</span>
        </div>
        <div className="tools skillItem" data-aos="fade-up">
          <SiNetlify />
          <span>Netlify</span>
        </div>
        <div className="tools skillItem" data-aos="fade-up">
          <SiAcademia /> <span>AutoCAD</span>
        </div>
        <div className="tools skillItem" data-aos="fade-up">
          <MdOutlineVideoSettings />
          <span>Sony Vegas Pro</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
