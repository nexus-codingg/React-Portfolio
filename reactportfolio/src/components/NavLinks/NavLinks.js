import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavLinks() {
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar ml-auto">
            <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact</Link>
                </li>
            </ul>
        </div>

    )
};

export default NavLinks;