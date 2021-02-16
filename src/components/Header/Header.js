import React, { useState } from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import { HeaderWrapper, Content } from "./Header.styles"

import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"


const Header = () => {

    const { site, menu } = useMenuQuery();
    const [menuOpen, setMenuOpen ] = useState(false)

    return (
        <HeaderWrapper>
         <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
         <OverlayMenu menuOpen={menuOpen} />
            <Content>
                <Link to="/" className="bhna-branding">
                <img src={Logo} alt={site.siteMetadata.title} /> 
                
                <div className="sm-line"></div>
                              
                <div className="register">
                <p className="bhna-register">National Register of Historic Places</p>
                </div>
            
                </Link>
               
                <Navigation menu={menu.menuItems.nodes} />
            </Content>
        </HeaderWrapper>
    )
}

export default Header