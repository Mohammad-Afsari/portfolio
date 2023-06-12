import './Skills.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { SiPostgresql } from 'react-icons/si'
import { SiSupabase } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiPowerbi } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiJest } from 'react-icons/si'
import { SiPostcss } from 'react-icons/si'
import { SiAmazondynamodb } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import { SiStorybook } from 'react-icons/si'
import { SiTestinglibrary } from 'react-icons/si'

const Skills = () => {
    return (
        <div className="skillsContainer">
            <section className="front-end">
                <h2>Frontend</h2>
                <div className="front-end skillItem html">
                    <SiHtml5 /> <span>HTML5</span>
                </div>
                <div className="front-end skillItem css">
                    <SiCss3 /> <span>CSS3</span>
                </div>
                <div className="front-end skillItem postcss">
                    <SiPostcss /> <span>PostCSS</span>
                </div>
                <div className="front-end skillItem javascript">
                    <SiJavascript /> <span>JavaScript</span>
                </div>
                <div className="front-end skillItem typescript">
                    <SiTypescript /> <span>TypeScript</span>
                </div>
                <div className="front-end skillItem react">
                    <SiReact /> <span>React (Hooks, zustand, react-query)</span>
                </div>
            </section>
            <section className="back-end">
                <h2>Backend (Database Systems)</h2>
                <div className="back-end skillItem tsql">
                    <DiMsqlServer />
                    <span>SQL Server (T-SQL)</span>
                </div>
                <div className="back-end skillItem postgresql">
                    <SiPostgresql />
                    <span>PostgreSQL</span>
                </div>
                <div className="back-end skillItem dynamodb">
                    <SiAmazondynamodb />
                    <span>DynamoDB</span>
                </div>
                <div className="back-end skillItem supabase">
                    <SiSupabase />
                    <span>Supabase</span>
                </div>
            </section>
            <section className="miscellaneous">
                <h2>Miscellaneous</h2>
                <div className="miscellaneous skillItem jest">
                    <SiJest />
                    <span>Jest</span>
                </div>
                <div className="miscellaneous skillItem reactTestingLibrary">
                    <SiTestinglibrary />
                    <span>React Testing Library</span>
                </div>
                <div className="tools skillItem storybook">
                    <SiStorybook />
                    <span>Storybook</span>
                </div>
                <div className="miscellaneous skillItem python">
                    <SiPython />
                    <span>Python</span>
                </div>
                <div className="miscellaneous skillItem powerbi">
                    <SiPowerbi /> <span>PowerBI</span>
                </div>
            </section>
            <section className="tools">
                <h2>Tools</h2>
                <div className="tools skillItem graphql">
                    <GrGraphQl />
                    <span>GraphQL</span>
                </div>
                <div className="tools skillItem git">
                    <SiGit /> <span>Git</span>
                </div>
                <div className="tools skillItem mui">
                    <SiMaterialui />
                    <span>Material UI</span>
                </div>
                <div className="tools skillItem bootstrap">
                    <SiBootstrap />
                    <span>Bootstrap</span>
                </div>
            </section>
        </div>
    )
}

export default Skills
