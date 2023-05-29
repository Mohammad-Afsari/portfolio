import "./Projects.css";
import "aos/dist/aos.css";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const associatedProjects = [
    {
      id: 1,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/strife.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/chatroomz",
      liveLink: "https://strifechatrooms.netlify.app/",
      title: "Strife - chatroom service",
      description:
        "A chatroom service where talking to people has been made easy - a full stack application built using supabase.",
      technologies:
        "React, Typescript, Supabase, MaterialUI, Postgresql, Zustand and react-query.",
      technologiesArr: [
        "React",
        "Typescript",
        "Supabase",
        "Authentication",
        "MaterialUI",
        "Postgresql",
        "Zustand",
        "react-query",
      ],
    },
    {
      id: 2,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/mdtanalytics.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/mdtanalytics",
      liveLink: "https://mdtanalytics.netlify.app/",
      title: "MDT Analytics landing page",
      description: "A landing page created for an analytics consultancy.",
      technologies: "React, Javascript, particlejs, CSS3, figma and dribbble.",
      technologiesArr: [
        "React",
        "Javascript",
        "ParticleJS",
        "CSS3",
        "Figma",
        "Dribbble",
      ],
    },
    {
      id: 3,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/microblog.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/microblog",
      liveLink: "https://github.com/Mohammad-Afsari/microblog",
      title: "Micro blog page",
      description: "A Micro blog page created to save your favourite blogs!",
      technologies: "React, Javascript, JSON server, CSS3.",
      technologiesArr: ["React", "Javascript", "JSON Server", "CSS3"],
    },
    {
      id: 4,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/organise.PNG?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/todo_list",
      liveLink: "https://mohammad-afsari.github.io/todo_list/#!",
      title: "Organise app",
      description: "An organisation app built to store your tasks and notes.",
      technologies: "HTML5, CSS3, Javascript, local storage.",
      technologiesArr: ["HTML5", "Javascript", "Local Storage", "CSS3"],
    },
    {
      id: 5,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/restaurant_page",
      liveLink: "https://mohammad-afsari.github.io/restaurant_page/#home",
      title: "D-Lish resturant landing page",
      description:
        "A landing page for a fictional resturant page showcasing affordable, authentic healthy food!",
      technologies: "HTML5, CSS3, JavaScript, ES5/ES6.",
      technologiesArr: ["HTML5", "CSS3", "JavaScript", "ES5/ES6"],
    },
    {
      id: 6,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/weatherapp.PNG?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/weather_application",
      liveLink: "https://mohammad-afsari.github.io/weather_application/",
      title: "Weather application",
      description: "Weather application using the OpenWeather API.",
      technologies: "HTML5, CSS3, Javascript, weatherAPI.",
      technologiesArr: ["HTML5", "CSS3", "Javascript", "OpenWeatherAPI"],
    },
  ];

  return (
    <div className="projects">
      {associatedProjects.map(
        ({
          id,
          image,
          githubLink,
          liveLink,
          title,
          description,
          technologies,
          technologiesArr,
        }) => {
          return (
            <article className="projectsItem" key={id}>
              <p className="projectDescription">{title}</p>
              <div className="imgContainer containerTest">
                <div
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  alt="Avatar"
                  className="image"
                >
                  <img src={image} alt="" className="projectImg" />
                  <div className="overlay">
                    <div className="text overlayContainer">
                      <div className="overlayTitle">{title}</div>
                      <div>{description}</div>
                      <div className="overlayTech">
                        <span className="builtUsing">Built using:</span>
                        {/* <p>{technologies}</p> */}
                        <p className="techs">
                          {technologiesArr.map((tech) => {
                            return <span> {tech} </span>;
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttonLinks">
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <SiGithub />
                </a>
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
};

export default Projects;
