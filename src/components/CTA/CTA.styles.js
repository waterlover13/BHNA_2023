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
   /* height: 100%; */
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
  transition: all .3s ease;


  @media (min-width: 768px) {
    /* max-height: 200px; */
  }

  @media ${props => props.theme.breakpoints.tablet2} {
   /* margin-bottom: 2rem;
   padding-bottom: 24px; */
  }

  :hover {
    
    box-shadow: 1px 3px 6px 1px rgba(59, 59, 59, .12);
  }
`



export const CTADetails = styled.div`
  text-decoration: none;
  padding: 12px;
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
  margin-bottom: 1rem;
`


export const CTAImage = styled.div`
  /* margin-bottom: 20px; */
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



