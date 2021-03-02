import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const StyledImg = styled(GatsbyImage)`
  height: 232px;
  margin-bottom: 0.5rem;

  img {
    transition: all 0.3s !important;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
   max-width: 100%;
   width: 100%;
  height: 100%;
   max-height: 300px;
  }
`

export const CTALink = styled(Link)`
  text-decoration: none;
  
`

export const CTAWrapper = styled.div`
  /* max-height: 140px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: row; */
 
 
  

  @media (min-width: 768px) {
    /* max-height: 200px; */
  }

  @media ${props => props.theme.breakpoints.tablet2} {
   margin-bottom: 2rem;
  }
`



export const CTADetails = styled.div`
  text-decoration: none;
  
`

export const CTATitle = styled.h3`
  color: #191D07;
  font-family: "Libre Caslon Text", serif;
  margin-bottom: 0.5rem;

  @media ${props => props.theme.breakpoints.tablet2} {
   margin-top: 0.2rem;
  }
`

export const CTAText = styled.p`
  color: #191D07;
  
`


export const CTAImage = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  /* position: relative; */
  overflow: hidden;

  :hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 200px;
  }
`

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
