import React from "react";
// https://forum.freecodecamp.org/t/importing-images-in-react/206974/4
import PortfolioImgArr from "../../pages/Portfolio/ProjectArr/PortfolioImgsArr";

function ProjectContainer() {

    return (
        PortfolioImgArr.map((project, index) =>
            <div key={project.id}>
                <div class="col">
                    <img src={project.image} class="card-img-top" id="picStyle" />
                    <div class="card text-center">
                        <div class="card-body" id="cardbody-Style">
                            <div class="card-header" id="title-div">
                                <span class="card-title" target="_blank" id="port-text">
                                    {project.title}
                                </span>
                            </div>
                            <p> {project.description}</p>
                            <a href={project.github} target="_blank" id="port-text">
                                Check out the repo for this assignment here on Github!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
};

export default ProjectContainer;



