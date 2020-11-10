import React from "react";
import ProfilePic from "../ProfilePicContainer/ProfilePicContainer"

function AboutMeContent() {
    return (
        <div class="container-fluid">
            <div class="row" id="main-row">
                <div class="col-sm-7" id="bodyContent">
                    <h3>About Me</h3>
                    <div id="border" width="400px"></div>
                    <ProfilePic />
                    <div id="styleText">
                        <p> Hello everyone! My name is Keiana Hanson, but a lot of people just call me
                        "Kiki." I am 26 years old, live on Long Island in New York and I am a junior
                        coder/developer.
                        In 2016, I graduated from Binghamton University with my Bachelor of Arts with a major in
                        Creative Writing and a minor in Cinema. As a child, I’ve always been creative – from
                        writing “fanfictions” about my favorite characters from movies and shows, to creating
                        ridiculous skits and short movies with my college a capella group, 
                        I’ve always wanted to be creative for a living. </p>
                        <p>
                            I came across a non-profit group called
                            Woman Who Code, and it changed my life. Seeing so many women of diverse backgrounds
                            inspired me to pursue coding. I enrolled in Columbia University’s Fullstack Coding Boot Camp 
                            so I may develop the skill set to become a software developer 
                            and bring my ideas to light in the medium of
                            video games. </p>
                        <p> This post-grad journey has been confusing, and I’ve had many moments where I
                        felt lost, but I am forever grateful for the journey nonetheless, as it has led me to
                        this point in my life, and I’m excited to see where I end up. </p>

                    </div>

                </div>
            </div>
        </div>
    )
};

export default AboutMeContent;