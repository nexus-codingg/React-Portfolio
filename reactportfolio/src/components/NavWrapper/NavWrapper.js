import React from "react";
import NavLinks from "../NavLinks/NavLinks"

function NavWrapper() {
    return (
        <section id="NameBar" className="col-sm pl-5 pr-5 text-sm-center">
            <h1> Keiana Hanson</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-left">
                <span className="navbar-brand">Main Menu</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLinks />
            </nav>
        </section>
    )
};

export default NavWrapper;