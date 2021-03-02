import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    
`


export const StyledImg = styled(GatsbyImage)`
  /* max-height: 460px; */
  /* margin-bottom: 60px; */
  max-width: 600px;
  
`

export const InnerWrapper = styled.div`
    max-width: ${props => props.theme.max.large};
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: 1fr;
    max-width: ${props => props.theme.max.medium};
  }

    @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
  

`

export const Paragraph = styled.p`
    margin: 1rem 0;
    line-height: 1.7;

    @media ${props => props.theme.breakpoints.desktop} {
    
    max-width: 80%;
  }

    @media ${props => props.theme.breakpoints.tablet2} {
        max-width: 98%;
  }
    
`