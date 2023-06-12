import './ProjectCard.css'

const projects = {
    // have an object here with id's
    // each id will represent a specific fascia
    // each object will have title, description and maybe link?
}

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
                    {/* Could add for line below 'Site' as {site} when mapping through projects like SD-UK, Flannels etc */}
                    <button className="liveSite">LIVE SITE</button>
                </div>
            </div>
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
                    {/* Could add for line below 'Site' as {site} when mapping through projects like SD-UK, Flannels etc */}
                    <button className="liveSite">LIVE SITE</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
