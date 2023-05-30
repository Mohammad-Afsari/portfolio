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
import { SiSupabase } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiAmazondynamodb } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiStorybook } from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <section className="front-end">
        <h2>Frontend</h2>
        <div className="front-end skillItem">
          <SiHtml5 /> <span>HTML5</span>
        </div>
        <div className="front-end skillItem">
          <SiCss3 /> <span>CSS3</span>
        </div>
        <div className="front-end skillItem">
          <SiPostcss /> <span>PostCSS</span>
        </div>
        <div className="front-end skillItem">
          <SiJavascript /> <span>JavaScript</span>
        </div>
        <div className="front-end skillItem">
          <SiTypescript /> <span>TypeScript</span>
        </div>
        <div className="front-end skillItem">
          <SiReact /> <span>React (Hooks, zustand, react-query)</span>
        </div>
      </section>
      <section className="back-end">
        <h2>Backend (Database Systems)</h2>
        <div className="back-end skillItem">
          <DiMsqlServer />
          <span>SQL Server (T-SQL)</span>
        </div>
        <div className="back-end skillItem">
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className="back-end skillItem">
          <SiAmazondynamodb />
          <span>DynamoDB</span>
        </div>
        <div className="back-end skillItem">
          <SiSupabase />
          <span>Supabase</span>
        </div>
      </section>
      <section className="data-analysis">
        <h2>Miscellaneous</h2>
        <div className="data-analysis skillItem">
          <SiJest />
          <span>Jest</span>
        </div>
        <div className="data-analysis skillItem">
          <SiTestinglibrary />
          <span>React Testing Library</span>
        </div>
        <div className="tools skillItem">
          <SiStorybook />
          <span>Storybook</span>
        </div>
        <div className="data-analysis skillItem">
          <SiPython />
          <span>Python</span>
        </div>
        <div className="data-analysis skillItem">
          <SiPowerbi /> <span>PowerBI</span>
        </div>
      </section>
      <section className="tools">
        <h2>Tools</h2>
        <div className="tools skillItem">
          <GrGraphQl /> 
          <span>GraphQL</span>
        </div>
        <div className="tools skillItem">
          <SiGit /> <span>Git</span>
        </div>
        <div className="tools skillItem">
          <SiMaterialui /> 
          <span>Material UI</span>
        </div>
        <div className="tools skillItem">
          <SiBootstrap /> 
          <span>Bootstrap</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
