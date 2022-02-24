import './Projects.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        aos.init({duration: 2200});
    }, [])

    return ( 
        <div className="projects">
            <div className='projectsItem projectsItem1' data-aos="fade-up">
                <img src="" alt="" />
            </div>
            <div className='projectsItem projectsItem2' data-aos="fade-up"></div>
            <div className='projectsItem projectsItem3' data-aos="fade-up"></div>
            <div className='projectsItem projectsItem4' data-aos="fade-up"></div>
            <div className='projectsItem projectsItem5' data-aos="fade-up"></div>
            <div className='projectsItem projectsItem6' data-aos="fade-up"></div>
        </div>
     );
}
 
export default Projects;