import React from "react";
import Fade from 'react-reveal/Fade';
import ProjectContainer1 from "../../components/ProjectContainer/ProjectContainer1";
import ProjectContainer2 from "../../components/ProjectContainer/ProjectContainer2";
import ProjectContainer3 from "../../components/ProjectContainer/ProjectContainer3";

function Portfolio() {
    return (
        <Fade>
            <div class="container-fluid">
                <div class="row" id="main-row">
                    <div id="portBody">
                        <h3>Portfolio</h3>
                        <div id="border" width="400px"></div>
                        <div className="row">
                            <ProjectContainer1 />
                            <div className="row">
                                <ProjectContainer2 />
                            </div>
                            <div className="row">
                                <ProjectContainer3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
};

export default Portfolio;