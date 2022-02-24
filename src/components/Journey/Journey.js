import './Journey.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VscDebugStart } from 'react-icons/vsc'
import { MdEngineering } from 'react-icons/md'
import { GiGraduateCap } from 'react-icons/gi'
import { FaDatabase } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        AOS.init({duration: 2200});
    }, [])
    return ( 
        <div className="journey" data-AOS="fade-up">
            <VerticalTimeline lineColor={ 'rgb(42, 138, 248)' }>

                {/* Start */}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<VscDebugStart />}
                />

                {/* University / Study */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(42, 138, 248)' }}
                    date="September 2013 - June 2017"
                    iconStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    icon ={<GiGraduateCap />}
                >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">MEng Civil Engineering</h4>
                    <p>
                    Completed four year masters course at City, University of London achieving a first class honours.
                    </p>
                </VerticalTimelineElement>

                {/* Mott MacDonald Graduate Engineer */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(42, 138, 248)' }}
                    date="September 2017 - January 2019"
                    iconStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    icon={<MdEngineering />}
                >
                    <h3 className="vertical-timeline-element-title">Graduate Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mott MacDonald Ltd</h4>
                    <p>
                    Geotechnical and structural engineer working on retaining wall design, foundation (bridges) design and tunnel settlement analysis for clients Boston Barrier and High Speed 2 (HS2).
                    <br></br>
                    <br></br>
                    Tech stack:
                    <br></br>
                    Python, PLAXIS2D, Repute, GRP, AutoCAD, Microsoft Office
                    </p>
                </VerticalTimelineElement>

                {/* Mott MacDonald Data Analyst */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(42, 138, 248)' }}
                    date="January 2019 - September 2021"
                    iconStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    icon={<FaDatabase/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Mott MacDonald Ltd</h4>
                    <p>
                    Digital data engineer for the rebuild and redevelopment of the 18-year-old existing system for clients  Highways England. Responsibilities included writing data migration algorithms that will transfer data from legacy system to the new system during a critical switchover period in 2021. Responsible for maintaining internal website as well as building dashboards on the new system for Highways England.

                    <br></br>
                    <br></br>
                    Tech stack:
                    <br></br>
                    SQL (SSMS), Python, PowerBI, HTML5, CSS, JavaScript, Microsoft Office
                    </p>
                </VerticalTimelineElement>

                {/* Cognizant - Data Analyst */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(42, 138, 248)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(42, 138, 248)' }}
                    date="September 2021 - Present"
                    iconStyle={{ background: 'rgb(255, 179, 39)', color: '#fff' }}
                    icon={<FaDatabase/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Analyst</h3>
                    <h4 className="vertical-timeline-element-subtitle">Cognizant</h4>
                    <p>
                    Data Analyst working with European Tyre Enterprise to clense, transform and migrate data onto their new systems.
                    <br></br>
                    <br></br>
                    Tech stack:
                    <br></br>
                    SQL (PostgreSQL), Python, PowerBI, Microsoft Office
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
     );
}
 
export default About;