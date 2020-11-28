import React from "react";
import "../../pages/Contact/contact.css";


function ContactContainer() {
    return (
        <div class="col-12 text-center" id="link-icons">
            <div>
                <h2> Email Me Here!</h2>
                <a href="mailto:kiki_hanson@aol.com" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope fa-7x" id="socialIcon"></i></a>
            </div>
            <div className="row">
                <div className="col">
                    <h2> Check Out More of My Code on Github!</h2>
                    <a href="https://www.github.com/microxgleek94/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-7x"
                        alt="Github Icon" id="socialIcon"></i></a>
                </div>
                <div className="col">
                    <h2> You Can Also Connect with Me on LinkedIn!</h2>
                    <a href="https://www.linkedin.com/in/keianahanson/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-7x"
                        alt="LinkedIn Icon" id="socialIcon" ></i></a>
                </div>
            </div>
            <div id="border" width="200px"></div>
        </div>
    )
};

export default ContactContainer;