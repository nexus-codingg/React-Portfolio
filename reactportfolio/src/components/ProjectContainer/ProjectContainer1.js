import React from "react";
// https://forum.freecodecamp.org/t/importing-images-in-react/206974/4
import PortfolioImgArr from "../../pages/Portfolio/ProjectArr/PortfolioImgsArr";
import "../../pages/Portfolio/portfolio.css";

function ProjectContainer1() {
    // display only 2 projects at a time
    const projectID = PortfolioImgArr.slice(0, 2)

    return (
        projectID.map((project, index) =>
            <div key={project.id} className="col">
                <img src={project.image} className="card-img-top" id="picStyle" />
                <div className="card text-center">
                    <div className="card-body" id="cardbody-Style">
                        <div className="card-header" id="title-div">
                            <span className="card-title" id="port-text">
                                {project.title}
                            </span>
                        </div>
                        <p> {project.description}</p>
                        <a href={project.deployed} target="_blank" rel="noopener noreferrer" id="port-text">
                            Check out the deployed app here!
                        </a>
                        <br></br>
                        <br></br>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" id="port-text">
                            Check out the repo for this assignment here on Github!
                               </a>
                    </div>
                </div>
            </div>
        )

    )
};

export default ProjectContainer1;



