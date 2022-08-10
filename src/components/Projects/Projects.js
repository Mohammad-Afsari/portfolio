import "./Projects.css";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  useEffect(() => {
    aos.init({ duration: 2200 });
  }, []);

  const associatedProjects = [
    {
      id: 1,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/strife.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/chatroomz",
      liveLink: "https://strifechatrooms.netlify.app/",
      description:
        "Strife - A chatroom service where talking to people has been made easy.",
    },
    {
      id: 2,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/mdtanalytics.PNG?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/mdtanalytics",
      liveLink: "https://mdtanalytics.netlify.app/",
      description: "MDT Analaytics Ltd. landing page.",
    },
    {
      id: 3,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/microblog.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/microblog",
      liveLink: "https://github.com/Mohammad-Afsari/microblog",
      description: "Micro blog page built in React using JSON server.",
    },
    {
      id: 4,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/organise.PNG?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/todo_list",
      liveLink: "https://mohammad-afsari.github.io/todo_list/#!",
      description:
        "Organise app built using vanilla JavaScript saved to local storage.",
    },
    {
      id: 5,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/restaurant_page",
      liveLink: "https://mohammad-afsari.github.io/restaurant_page/#home",
      description: "D-Lish resturant - affordable, authentic healthy food!",
    },
    {
      id: 6,
      image:
        "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/weatherapp.PNG?raw=true",
      githubLink: "https://github.com/Mohammad-Afsari/weather_application",
      liveLink: "https://mohammad-afsari.github.io/weather_application/",
      description: "Weather application using the OpenWeather API.",
    },
  ];

  return (
    <div className="projects">
      {associatedProjects.map(
        ({ id, image, githubLink, liveLink, description }) => {
          return (
            <article className="projectsItem" data-aos="fade-up" key={id}>
              <p className="projectDescription">{description}</p>
              <div className="imgContainer">
                <a href={liveLink} target="_blank" rel="noreferrer">
                  <img src={image} alt="" className="projectImg" />
                </a>
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
