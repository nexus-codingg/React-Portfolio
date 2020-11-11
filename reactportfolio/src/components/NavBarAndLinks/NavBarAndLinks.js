import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBarAndLinks() {
    const location = useLocation();

    return (
        <div class="container-fluid">
            <section id="NameBar" class="col-sm pl-5 pr-5 text-sm-center">
                <h1> Keiana Hanson</h1>
                <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-left">
                    <span class="navbar-brand">Main Menu</span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar ml-auto">
                            <li className="nav-item">
                                <Link to="/" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
};

export default NavBarAndLinks;