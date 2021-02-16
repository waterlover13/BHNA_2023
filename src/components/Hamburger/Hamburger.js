import React from "react"
import { HamburgerWrapper, HamburgerIcon } from "./Hamburger.styles" 

const Hamburger = ({ menuOpen, setMenuOpen }) => (

    <HamburgerWrapper>
    <HamburgerIcon
        role="button"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(prev => !prev)}
    >
        <div />
    </HamburgerIcon>
    </HamburgerWrapper>
)

export default Hamburger