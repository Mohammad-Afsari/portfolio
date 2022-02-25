import './Projects.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    useEffect(() => {
        aos.init({duration: 2200});
    }, [])

    const associatedProjects = [
        {
            "id": 1,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/restaurant_page",
            "liveLink": "https://mohammad-afsari.github.io/restaurant_page/#home"
        },
        {
            "id": 2,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/organise.PNG?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/todo_list",
            "liveLink": "https://mohammad-afsari.github.io/todo_list/#!"
        },
        {
            "id": 3,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/weatherapp.PNG?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/weather_application",
            "liveLink": "https://mohammad-afsari.github.io/weather_application/"
        },
        {
            "id": 4,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/library.PNG?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/library",
            "liveLink": "https://mohammad-afsari.github.io/library/"
        },
        {
            "id": 5,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/tictactoe.png?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/tic_tac_toe",
            "liveLink": "https://mohammad-afsari.github.io/tic_tac_toe/"
        },
        {
            "id": 6,
            "image": "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true",
            "githubLink":  "https://github.com/Mohammad-Afsari/restaurant_page",
            "liveLink": "https://mohammad-afsari.github.io/restaurant_page/#home"
        }
    ]

    return ( 
        <div className="projects">
            {
                associatedProjects.map(({id, image, githubLink,liveLink}) => {
                    return (
                        <article className="projectsItem" data-aos="fade-up" key={id}>
                            <div className="imgContainer">
                                <img src={image} alt="" className="projectImg" />
                            </div>
                            <div className="buttonLinks">
                                <a href={githubLink}><SiGithub /></a>
                                <a href={liveLink}><FiExternalLink /></a>
                            </div>
                        </article>
                    )
                })
            }
        </div>
     );
}
 
export default Projects;