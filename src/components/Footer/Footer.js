import React from "react"

import Logo from "../../images/logo.svg"

import { FooterWrapper, Content, FooterBranding, FooterNav } from "./Footer.styles"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {

    return (
    <FooterWrapper>
    <Content>
        <FooterBranding>
        <img src={Logo} alt="Bungalow Heaven logo"/>
        <div className="sm-line"></div>
        <div className="register">
        <p className="bhna-register">National Register of Historic Places</p>
        </div>

        <div>
            <p className="bhna-copyright">© Bungalow Heaven Landmark District</p>
        </div>
        </FooterBranding>

        <FooterNav>
        <InstagramIcon />
        <FacebookIcon />
        </FooterNav>
    </Content>
    </FooterWrapper>
    
 )
}

export default Footer