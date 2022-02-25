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
           
        }
    ]

    return ( 
        <div className="projects">
            <article className="projectsItem projectsItem1" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                    <a href="https://github.com/Mohammad-Afsari/restaurant_page"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/restaurant_page/#home"><FiExternalLink /></a>
                </div>
            </article>

            <article className="projectsItem projectsItem2" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                    <a href="https://github.com/Mohammad-Afsari/restaurant_page"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/restaurant_page/#home"><FiExternalLink /></a>
                </div>
            </article>
            <article className="projectsItem projectsItem3" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/library.PNG?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                    <a href="https://github.com/Mohammad-Afsari/library"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/library/"><FiExternalLink /></a>
                </div>
            </article>
            <article className="projectsItem projectsItem4" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/weatherapp.PNG?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                <a href="https://github.com/Mohammad-Afsari/weather_application"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/weather_application/"><FiExternalLink /></a>
                </div>
            </article>
            <article className="projectsItem projectsItem5" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/organise.PNG?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                    <a href="https://github.com/Mohammad-Afsari/todo_list"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/todo_list/#!"><FiExternalLink /></a>
                </div>
            </article>
            <article className="projectsItem projectsItem6" data-aos="fade-up">
                <div className=''>
                    <img className='projectImg dlish' src="https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/tictactoe.png?raw=true" alt="" />
                </div>
                <div className="buttonLinks">
                    <a href="https://github.com/Mohammad-Afsari/tic_tac_toe"><SiGithub /></a>
                    <a href="https://mohammad-afsari.github.io/tic_tac_toe/"><FiExternalLink /></a>
                </div>
            </article>
        </div>
     );
}
 
export default Projects;