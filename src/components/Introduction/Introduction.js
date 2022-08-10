import "./Introduction.css";
import { GiGraduateCap } from "react-icons/gi";
import { FaDev } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { SiSparkfun } from "react-icons/si";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    aos.init({ duration: 2200 });
  }, []);

  return (
    <div className="whyUsContainer" data-aos="fade-up">
      <div className="whyUs">
        <div className="whyUsItem" data-aos="fade-up">
          <section className="whyUsImg">
            <FaDev />
          </section>
          <div>
            <h6>Front End Developer</h6>
            <section>
              I'm a self taught front end developer with a passion for
              development. I have been learning web development as a hobbyist
              for the past couple years and believe now is the time for me to
              pursue a career in it.
            </section>
          </div>
        </div>
        <div className="whyUsItem" data-aos="fade-up">
          <section className="whyUsImg">
            <GiGraduateCap />
          </section>
          <div>
            <h6>Masters Degree</h6>
            <section>
              I have a background in civil engineering and have worked for one
              of the largest employee owned engineering companies in the world!
            </section>
          </div>
        </div>
        <div className="whyUsItem" data-aos="fade-up">
          <section className="whyUsImg">
            <MdInsertChart />
          </section>
          <div>
            <h6>Experience</h6>
            <section>
              I have five years experience working as a data engineer and
              analyst in a variety of industries such as IT, engineering and
              retail.
            </section>
          </div>
        </div>
        <div className="whyUsItem" data-aos="fade-up">
          <section className="whyUsImg">
            <SiSparkfun />
          </section>
          <div>
            <h6>Fun Fact</h6>
            <section>
              I was selected for the final 30 squad football players to
              represent Nike Academy in 2012. Football has been in my DNA since
              young and is still a big part of my life - current team Camden and
              Islington United FC.
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
