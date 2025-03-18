import './Introduction.css'
import { GiGraduateCap } from 'react-icons/gi'
import { FaDev } from 'react-icons/fa'
import { MdInsertChart } from 'react-icons/md'
import { SiSparkfun } from 'react-icons/si'
import 'aos/dist/aos.css'

const experienceMapper = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
}

const Introduction = () => {
    const careerInitialYear = 2020
    const dateNow = new Date()
    const experience =
        experienceMapper[dateNow.getFullYear() - careerInitialYear]

    return (
        <div className="whyUsContainer">
            <div className="whyUs">
                <div className="whyUsItem">
                    <section className="whyUsImg">
                        <FaDev />
                    </section>
                    <div>
                        <h6>Full Stack Engineer</h6>
                        <section>
                            I am a self-taught full stack javascript engineer
                            who possesses a deep passion for web and mobile
                            development. My relentless pursuit of knowledge and
                            commitment to continuous learning have allowed me to
                            acquire a comprehensive skill set and stay at the
                            forefront of industry trends.
                        </section>
                    </div>
                </div>
                <div className="whyUsItem">
                    <section className="whyUsImg">
                        <GiGraduateCap />
                    </section>
                    <div>
                        <h6>Masters Degree</h6>
                        <section>
                            I possess a distinguished academic background in
                            civil engineering, having completed a master's
                            degree with exceptional distinction. Throughout the
                            course of my four-year program, I consistently
                            demonstrated exemplary performance, attaining a
                            remarkable average of 75%.
                        </section>
                    </div>
                </div>
                <div className="whyUsItem">
                    <section className="whyUsImg">
                        <MdInsertChart />
                    </section>
                    <div>
                        <h6>Experience</h6>
                        <section>
                            {`With ${experience.toLowerCase()} years of experience as an engineer, I
                            have worked for renowned organizations including
                            Frasers Group, Cognizant, and Mott MacDonald. These
                            experiences have equipped me with valuable insights
                            into the intricacies of large-scale enterprises.`}
                        </section>
                    </div>
                </div>
                <div className="whyUsItem">
                    <section className="whyUsImg">
                        <SiSparkfun />
                    </section>
                    <div>
                        <h6>Fun Fact</h6>
                        <section>
                            In 2012, I was selected as one of the final 30
                            football players to represent Nike Academy, an
                            unforgettable experience that solidified my love for
                            the game. Football has always been an integral part
                            of my life, and to this day, it remains a driving
                            force that fuels my passion.
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction
