import React from "react";
import AboutPic from "../../assets/images/Black_Girl_With_Laptop.jpg";
import "./HomeContent.css"

function HomeContent() {
    return (
        <div class="container-fluid">
            <div class="row" id="main-row">
                <div class="col-sm-7" id="bodyContent">
                    <h3> Welcome to my Website!</h3>
                    <div id="border" width="400px"></div>
                    <div className="text-center">
                        <img id="AboutPic" src={AboutPic}
                            className="rounded float-left img-fluid" alt="JPG of Black Girl With Laptop" />
                    </div>
                    <div id="styleText">
                        <p> I am a fullstack software developer with a background in English Creative Writing interested in creating video games with complex characters and universal storylines.
                        I recently graduated from Columbia University’s FullStack Coding Boot Camp, where I solidify skills in frontend and backend technologies utilizing Javascript, HTML, CSS, React,js, Node.js.
                        </p>
                        <p> I thoroughly enjoy working on a team, and believe overcoming obstacles with patience, clear, concise communication, and supporting one another's strengths and leveraging those skills will have the best outcomes.
                        I consider myself a very organized and methodical individual that values efficiency to reach my goals. On all 3 of my collaborative team projects during the boot camp, I was the project manager for the team.
                        Recently, I honed my backend skills by utilizing Passport.js authentication for my team’s final project, which is a user-data driven TikTok-styled website to assist users in finding apartments in their area.
                        </p>
                        <p> Currently, I am taking Udemy courses to learn C# and familiarize myself with the basics of
                        Unity’s gaming engine, so I may build upon my portfolio with personal gaming projects.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <a href="mailto:kiki_hanson@aol.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope fa-7x" id="homeSocial"></i></a>
                        </div>
                        <div className="col">
                            <a href="https://www.github.com/microxgleek94/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-7x" alt="Github Icon" id="homeSocial"></i></a>
                        </div>
                        <div className="col">
                            <a href="https://www.linkedin.com/in/keianahanson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-7x" alt="LinkedIn Icon" id="homeSocial" ></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default HomeContent;