import React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import { Wrapper, Content } from "./Header.styles"



const Header = () => {

    const { site, menu } = useMenuQuery();
    console.log(site)

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default Header