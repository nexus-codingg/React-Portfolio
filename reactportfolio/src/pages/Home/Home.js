import React from "react";
import Fade from 'react-reveal/Fade';
// when importing files that don't have the default "index.js", 
// make sure to import the full file path and the exact file name
import HomeContent from "../../components/HomeContent/HomeContent";

function Home() {
    return (
        <Fade>
            <HomeContent />
        </Fade>
    )
};

export default Home;