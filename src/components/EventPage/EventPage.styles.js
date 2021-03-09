import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    padding: 0 24px;
`

export const Content = styled.div`

`

export const StyledImg = styled(GatsbyImage)`
  /* max-height: 460px; */
  /* margin-bottom: 60px; */
  max-width: 600px;
  
`

export const StyledImg2 = styled(GatsbyImage)`
  width: 300px;
  max-width: 100%;
  margin-right: 3rem;
  
`

export const StyledImg3 = styled(GatsbyImage)`
 max-width: 100%;
 width: 320px;
`

export const SponsorWrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  
  text-align: center;
  padding: 3rem 24px;

  .g-sponsors {
    color: goldenrod;
  }
 
`

export const SponsorContent = styled.div`
  /* margin: 0 auto;
  max-width: 1280px;
  padding: 0 24px;
  text-align: center; */

    div {
      /* display: flex;
     flex-direction: row;
     justify-content: center; */
     
      
      @media ${props => props.theme.breakpoints.tablet2} {
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        justify-content: space-between;
      }
   }
  
`

export const InnerWrapper = styled.div`
    max-width: ${props => props.theme.max.large};
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    

    @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr;
   
  }
`

export const H3 = styled.h3`
  font-size: 2.5rem;
  font-family: "libre caslon text", serif;
  margin-bottom: 3rem;
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

