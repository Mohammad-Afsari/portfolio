import './Journey.css'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { VscDebugStart } from 'react-icons/vsc'
import { MdEngineering } from 'react-icons/md'
import { GiGraduateCap } from 'react-icons/gi'
import { FaDatabase } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

const About = () => {
    return (
        <section className="journey">
            <VerticalTimeline lineColor={'rgb(42, 138, 248)'}>
                {/* Start */}
                <VerticalTimelineElement
                    iconStyle={{
                        background: 'rgb(16, 204, 82)',
                        color: '#fff',
                    }}
                    icon={<VscDebugStart />}
                />

                {/* University / Study */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(42, 138, 248)',
                    }}
                    date="September 2013 - June 2017"
                    iconStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    icon={<GiGraduateCap />}
                >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        MEng Civil Engineering
                    </h4>
                    <p>
                        Completed four year masters course at City, University
                        of London achieving a first class honours.
                    </p>
                </VerticalTimelineElement>

                {/* Mott MacDonald Graduate Engineer */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(42, 138, 248)',
                    }}
                    date="September 2017 - January 2020"
                    iconStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    icon={<MdEngineering />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Graduate Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mott MacDonald Ltd
                    </h4>
                    <p>
                        Responsible for developing data migration algorithms to
                        seamlessly transfer data from Highways England's
                        Geotechnical Database Management System (HAGDMS) to a
                        newly implemented GDMS platform.
                    </p>
                </VerticalTimelineElement>

                {/* Mott MacDonald Data Analyst */}
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(42, 138, 248)',
                    }}
                    date="January 2019 - September 2021"
                    iconStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    icon={<FaCode />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Assistant Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mott MacDonald Ltd
                    </h4>
                    <p>
                        Developer in the reconstruction and redevelopment of an
                        18-year-old system for esteemed client Highways England.
                        My responsibilities encompassed various crucial tasks
                        such as developing reporting web pages, executing data
                        migration, crafting PowerBI dashboards, and ensuring the
                        seamless maintenance of the clients' landing page.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(42, 138, 248)',
                    }}
                    date="September 2021 - November 2022"
                    iconStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    icon={<FaDatabase />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Full Stack Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Cognizant
                    </h4>
                    <p>
                        Full stack engineer working with European Tyre
                        Enterprise to cleanse and transform diverse datasets for
                        integration into Salesforce and BI platforms.
                        Additionally, I developed an in-house management tool
                        specifically tailored for wholesalers, enabling easy
                        access to customer addresses across the United Kingdom.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: 'rgb(42, 138, 248)',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  rgb(42, 138, 248)',
                    }}
                    date="November 2022 - Present"
                    iconStyle={{
                        background: 'rgb(255, 179, 39)',
                        color: '#fff',
                    }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Web Engineer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Frasers Group
                    </h4>
                    <p>
                        Web Engineer optimizing user experiences for renowned
                        brands like Sports Direct, House of Fraser, USC, and
                        Flannels. By adhering to atomic design principles, I
                        developed and enhanced web application features while
                        maintaining a centralised Storybook documentation for
                        efficient collaboration and accelerated development
                        cycles. With a strong commitment to code quality, I
                        ensured comprehensive unit test coverage of at least 80%
                        using modern technologies and frameworks such as React,
                        Next, Node, TypeScript and GraphQL.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}

export default About
