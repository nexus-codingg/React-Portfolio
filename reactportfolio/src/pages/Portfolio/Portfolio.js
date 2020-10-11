import React from "react";
import Fade from 'react-reveal/Fade';
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";

function Portfolio() {
    return (
        <Fade>
            <div class="container-fluid">
                <div class="row" id="main-row">
                    <div id="portBody">
                        <h3>Portfolio</h3>
                        <div id="border" width="400px"></div>
                        <div className="row">
                        <ProjectContainer />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
};

export default Portfolio;