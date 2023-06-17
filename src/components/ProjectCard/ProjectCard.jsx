import './ProjectCard.css'

const projects = [
    {
        id: 1,
        project_name: 'Sports Direct UK',
        project_desc:
            'Built, fixed bugs and maintained existing components for Sports Direct UK.',
        url: 'https://www.sportsdirect.com/',
        image: 'https://github.com/Mohammad-Afsari/portfolio/blob/master/src/components/imgs/sd-uk/sd-uk.png?raw=true',
    },
    // {
    //     id: 2,
    //     project_name: 'Sports Direct MY',
    //     project_desc:
    //         'Built and contributed to storybook component library and Sports Direct Malaysia.',
    //     url: 'https://www.sportsdirect.com.my/',
    //     image: '',
    // },
    // {
    //     id: 3,
    //     project_name: 'House of Fraser',
    //     project_desc:
    //         'Built, fixed bugs and maintained existing components for House of Fraser.',
    //     url: 'https://www.houseoffraser.co.uk/',
    //     image: '',
    // },
    // {
    //     id: 4,
    //     project_name: 'Flannels',
    //     project_desc:
    //         'Built and maintained existing components on Flannels UK.',
    //     url: 'https://www.flannels.com/',
    //     image: '',
    // },
    // {
    //     id: 5,
    //     project_name: 'Strife',
    //     project_desc:
    //         'A chatroom service where talking to people has been made easy - a full stack application built using supabase.',
    //     url: 'https://strifechatrooms.netlify.app/',
    //     image: '',
    // },
    // {
    //     id: 6,
    //     project_name: 'MDT Analytics Ltd',
    //     project_desc: 'A landing page created for an analytics consultancy.',
    //     url: 'https://mdtanalytics.netlify.app/',
    //     image: '',
    // },
]

const ProjectCard = () => {
    return (
        <div className="projectCardContainer">
            <div className="projectCardWrapper">
                <div className="projectWrapper">
                    <div className="projectCardImage"></div>
                    <h1> Sports Direct UK</h1>
                    <p>
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit.
                    </p>
                </div>
                <div className="projectCardBtnWrapper">
                    <button className="viewMore">VIEW DETAILS</button>
                    <a
                        href="https://mdtanalytics.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="liveSite">LIVE SITE</button>
                    </a>
                </div>
            </div>
            {projects.map((proj) => {
                return (
                    <div className="projectCardWrapper" key={proj.id}>
                        <div className="projectWrapper">
                            <div className="projectCardImage">
                                <h1>{proj.project_name}</h1>
                                <p>{proj.project_desc}</p>
                            </div>
                            <div className="projectCardBtnWrapper">
                                <button className="viewMore">
                                    VIEW DETAILS
                                </button>
                                <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="liveSite">
                                        LIVE SITE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectCard
