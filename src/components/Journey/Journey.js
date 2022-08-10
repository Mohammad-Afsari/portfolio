import "./Journey.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VscDebugStart } from "react-icons/vsc";
import { MdEngineering } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    aos.init({ duration: 2200 });
  }, []);
  return (
    <section className="journey" data-aos="fade-up">
      <VerticalTimeline lineColor={"rgb(42, 138, 248)"}>
        {/* Start */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<VscDebugStart />}
        />

        {/* University / Study */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(42, 138, 248)" }}
          date="September 2013 - June 2017"
          iconStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          icon={<GiGraduateCap />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            MEng Civil Engineering
          </h4>
          <p>
            Completed four year masters course at City, University of London
            achieving a first class honours.
          </p>
        </VerticalTimelineElement>

        {/* Mott MacDonald Graduate Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(42, 138, 248)" }}
          date="September 2017 - January 2019"
          iconStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          icon={<MdEngineering />}
        >
          <h3 className="vertical-timeline-element-title">Graduate Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mott MacDonald Ltd
          </h4>
          <p>
            Graduate engineer working on retaining wall design, foundation
            (bridges) design and tunnel settlement analysis for clients Boston
            Barrier and High Speed 2 (HS2).
          </p>
        </VerticalTimelineElement>

        {/* Mott MacDonald Data Analyst */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(42, 138, 248)" }}
          date="January 2019 - September 2021"
          iconStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          icon={<FaDatabase />}
        >
          <h3 className="vertical-timeline-element-title">Data Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mott MacDonald Ltd
          </h4>
          <p>
            Digital data engineer for the rebuild and redevelopment of the
            18-year-old existing system for clients Highways England.
            Responsibilities included writing data migration algorithms,
            developing PowerBI dashboards and maintaining landing page for
            clients.
          </p>
        </VerticalTimelineElement>

        {/* Cognizant - Data Analyst */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(42, 138, 248)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(42, 138, 248)" }}
          date="September 2021 - Present"
          iconStyle={{ background: "rgb(255, 179, 39)", color: "#fff" }}
          icon={<FaDatabase />}
        >
          <h3 className="vertical-timeline-element-title">Data Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Cognizant</h4>
          <p>
            Data Engineer working with European Tyre Enterprise to cleanse,
            transform and migrate data onto Salesforce and new BI platforms.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default About;
