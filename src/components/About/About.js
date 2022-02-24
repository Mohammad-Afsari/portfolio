

import '../imgs/profilePic.jpg'
import './About.css'
import { Carousel } from 'react-carousel-minimal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    const data = [
        {
          image: "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/Football1.JPG?raw=true",
          caption: "I love football"
        },
        {
          image: "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/lakedistrict.jpg?raw=true",
          caption: "Travelling"
        },
        {
            image: "https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/quad.jpg?raw=true",
            caption: "And new experiences!"
        },
      ];
    
    
    useEffect(() => {
    AOS.init({duration: 2200});
    }, [])


    return ( 
        <div className="about" data-AOS="fade-up">
            <div className='aboutPhotos'>
                <div>
                <Carousel
                    data={data}
                    time={4000}
                    radius="100px"
                    slideNumber={false}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    style={{
                    textAlign: "center",
                    maxWidth: "90vw",
                    maxHeight: "500px",
                    }}
                />
                </div>
            </div>
            <div className="aboutIntro">
                <h1 className='aboutMe'>About Me</h1>
                <article className='introDetail'>
                    I'm a self taught <span>front end developer</span> based in central London. 
                    <br></br>
                    <br></br>
                    My passion is <span>technology</span> and <span>web development</span>. I have specialised using <span>ReactJS</span> and have built numerous <span>web applications</span> for myself, friends and family. I have enjoyed the development journey so much that I wish to pursue a <span>career</span> in it.
                    <br />
                    <br />
                    Currently, I am further developing and learning the <span>MERN</span> stack to hopefully build <span>full stack web applications</span> by the end of the year as well as <span>freelancing</span> in my own time.
                </article>
            </div>
        </div>
     );
}
 
export default About;

