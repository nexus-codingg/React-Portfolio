import React from "react";
import Fade from 'react-reveal/Fade';
// when importing files that don't have the default "index.js", 
// make sure to import the full file path and the exact file name
import AboutMeContent from "../../components/AboutMeContent/AboutMeContent";

function About() {
    return (
        <Fade>
            <AboutMeContent />
        </Fade>
    )
};

export default About;