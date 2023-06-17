import './Projects.css'
import 'aos/dist/aos.css'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    const associatedProjects = [
        // {
        //     id: 1,
        //     image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/sd-uk/sd-uk.png?raw=true',
        //     githubLink: 'https://github.com/Mohammad-Afsari/todo_list',
        //     liveLink: 'https://sportsdirect.com.my',
        //     title: 'Sports Direct Malaysia',
        //     description:
        //         'An organisation app built to store your tasks and notes.',
        //     technologiesArr: [
        //         'HTML',
        //         'CSS',
        //         'PostCSS',
        //         'TypeScript',
        //         'React',
        //         'Nextjs',
        //         'GraphQL',
        //         'Figma',
        //     ],
        // },
        // {
        //     id: 2,
        //     image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/sd-uk/sd-uk.png?raw=true',
        //     githubLink: 'https://github.com/Mohammad-Afsari/microblog',
        //     liveLink: 'https://sportsdirect.com',
        //     title: 'Sports Direct UK',
        //     description:
        //         'Sports Direct UK web application. Worked on various components from wish list, cart page, products details page and advertisement banners.',
        //     technologiesArr: [
        //         'HTML',
        //         'CSS',
        //         'SCSS',
        //         'JavaScript',
        //         'jQuery',
        //         '.NET',
        //         'C#',
        //         'SQL Server',
        //         'Dynamic Yield',
        //         'Figma',
        //     ],
        // },
        {
            id: 3,
            image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/strife.png?raw=true',
            githubLink: 'https://github.com/Mohammad-Afsari/chatroomz',
            liveLink: 'https://strifechatrooms.netlify.app/',
            title: 'Strife - chatroom service',
            description:
                'A chatroom service where talking to people has been made easy - a full stack application built using supabase.',
            technologiesArr: [
                'React',
                'Typescript',
                'Supabase',
                'Authentication',
                'MaterialUI',
                'Postgresql',
                'Zustand',
                'react-query',
                'Dribbble',
            ],
        },
        {
            id: 4,
            image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/mdtanalytics.png?raw=true',
            githubLink: 'https://github.com/Mohammad-Afsari/mdtanalytics',
            liveLink: 'https://mdtanalytics.netlify.app/',
            title: 'MDT Analytics landing page',
            description: 'A landing page created for an analytics consultancy.',
            technologiesArr: [
                'HTML',
                'CSS',
                'Javascript',
                'React',
                'ParticleJS',
                'Figma',
                'Dribbble',
            ],
        },
        // {
        //     id: 5,
        //     image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/d-lish.png?raw=true',
        //     githubLink: 'https://github.com/Mohammad-Afsari/restaurant_page',
        //     liveLink: 'https://mohammad-afsari.github.io/restaurant_page/#home',
        //     title: 'D-Lish resturant landing page',
        //     description:
        //         'A landing page for a fictional resturant page showcasing affordable, authentic healthy food!',
        //     technologiesArr: ['HTML5', 'CSS3', 'JavaScript', 'ES5/ES6'],
        // },
        // {
        //     id: 6,
        //     image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/weatherapp.PNG?raw=true',
        //     githubLink:
        //         'https://github.com/Mohammad-Afsari/weather_application',
        //     liveLink: 'https://mohammad-afsari.github.io/weather_application/',
        //     title: 'Weather application',
        //     description: 'Weather application using the OpenWeather API.',
        //     technologiesArr: ['HTML5', 'CSS3', 'Javascript', 'OpenWeatherAPI'],
        // },
    ]

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
                    technologiesArr,
                }) => {
                    return (
                        <article className="projectsItem" key={id}>
                            <p className="projectDescription">
                                {' '}
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {title}
                                </a>
                            </p>
                            <div className="imgContainer containerTest">
                                <div
                                    href={liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    alt="Avatar"
                                    className="image"
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className="projectImg"
                                    />
                                    <div className="overlay">
                                        <div className="text overlayContainer">
                                            <div className="overlayTitle">
                                                {title}
                                            </div>
                                            <div className="projectDesc">
                                                {description}
                                            </div>
                                            <div className="overlayTech">
                                                <span className="builtUsing">
                                                    Built using:
                                                </span>
                                                <p className="techs">
                                                    {technologiesArr.map(
                                                        (tech) => {
                                                            return (
                                                                <span>
                                                                    {' '}
                                                                    {tech}{' '}
                                                                </span>
                                                            )
                                                        }
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonLinks">
                                {/* <a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SiGithub />
                                </a>
                                <a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FiExternalLink />
                                </a> */}
                            </div>
                        </article>
                    )
                }
            )}
        </div>
    )
}

export default Projects
