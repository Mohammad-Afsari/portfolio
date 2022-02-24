

import '../imgs/profilePic.jpg'
import './About.css'
import profilePicCroppedHD from '../imgs/profilePicCroppedHD.jpg'
import { Carousel } from 'react-carousel-minimal';

const About = () => {
    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          caption: "Scotland"
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          caption: "San Francisco"
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          caption: "Darjeeling"
        }
      ];
      
    return ( 
        <div className="about">
            <div className='aboutPhotos'>
                <div>
                <Carousel
                    data={data}
                    time={3000}
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

