// Will hold header info, i.e my name, the nav bar and links
import React from "react";
import NavWrapper from "../NavWrapper/NavWrapper";
import NavLinks from "../NavLinks/NavLinks"

function Header () {
    return (
        <NavWrapper>
            <NavLinks />
        </NavWrapper>
    )
};

export default Header;