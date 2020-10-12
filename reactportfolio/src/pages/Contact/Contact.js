import React from "react";
import Fade from 'react-reveal/Fade';
import "./contact.css";
import ContactContainer from "../../components/ContactContainer/ContactContainer";


function Contact() {
    return (
        <Fade>
            <div className="container-fluid">
            <div class="row" id="main-row">
            <div class="col-sm-10" id="bodyContent">
            <h3>Contact</h3>
          <div id="border" width="400px"></div>
          <ContactContainer />
            </div>
            </div>
            </div>
        </Fade>
    )
};

export default Contact;