import React from "react";


function NavBarAndLinks() {
    return (
        <div class="container-fluid">
        <section id="NameBar" class="col-sm pl-5 pr-5 text-sm-center">
            <h1> Keiana Hanson</h1>
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-left">
                <a class="navbar-brand">Main Menu</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./portfolio.html">Portfolio<span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="./contact.html">Contact<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    </div>
    )
};

export default NavBarAndLinks;