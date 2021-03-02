import React from "react"
import { CTALink, CTADetails, CTAText, CTATitle, CTAWrapper, StyledImg } from "./CTA.styles"

const CTA = ({ image, link, text, title }) => (

    <CTAWrapper>
        <CTALink to={link} className="cta-link">
          <StyledImg image={image} alt="CTA img" />
            <CTADetails>
            <CTATitle>{title}</CTATitle> 
            <CTAText>{text}</CTAText>
            </CTADetails>
        </CTALink>
    </CTAWrapper>
)

export default CTA


