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
import { SiPython } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGit } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { MdOutlineVideoSettings } from "react-icons/md";
import { SiAcademia } from "react-icons/si";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <section className="front-end">
        <h2>Front-End</h2>
        <div className="front-end skillItem">
          <SiHtml5 /> <span>HTML5</span>
        </div>
        <div className="front-end skillItem">
          <SiCss3 /> <span>CSS3</span>
        </div>
        <div className="front-end skillItem">
          <SiJavascript /> <span>JavaScript</span>
        </div>
        <div className="front-end skillItem">
          <SiTypescript /> <span>TypeScript</span>
        </div>
        <div className="front-end skillItem">
          <SiBootstrap /> <span>Bootstrap</span>
        </div>
        <div className="front-end skillItem">
          <SiMaterialui /> <span>Material UI</span>
        </div>

        <div className="front-end skillItem">
          <SiReact /> <span>React (Hooks, zustand, react-query)</span>
        </div>
      </section>
      <section className="back-end">
        <h2>Back-End</h2>
        <div className="back-end skillItem">
          <DiMsqlServer />
          <span>SQL Server (T-SQL)</span>
        </div>
        <div className="back-end skillItem">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="back-end skillItem">
          <SiSupabase />
          <span>Supabase</span>
        </div>
      </section>
      <section className="data-analysis">
        <h2>Data Analysis</h2>
        <div className="data-analysis skillItem">
          <SiPython />
          <span>Python</span>
        </div>
        <div className="data-analysis skillItem">
          <SiPowerbi /> <span>PowerBI</span>
        </div>
        <div className="data-analysis skillItem">
          <RiFileExcel2Fill />
          <span>Microsoft Excel</span>
        </div>
        <div className="data-analysis skillItem">
          <SiMicrosoftaccess />
          <span>Microsoft Access</span>
        </div>
      </section>
      <section className="tools">
        <h2>Tools</h2>
        <div className="tools skillItem">
          <SiGit /> <span>Git</span>
        </div>
        <div className="tools skillItem">
          <SiJest />
          <span>Jest</span>
        </div>
        <div className="tools skillItem">
          <SiNetlify />
          <span>Netlify</span>
        </div>
        <div className="tools skillItem">
          <SiAcademia /> <span>AutoCAD</span>
        </div>
        <div className="tools skillItem">
          <MdOutlineVideoSettings />
          <span>Sony Vegas Pro</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
