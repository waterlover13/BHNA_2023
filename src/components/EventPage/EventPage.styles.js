import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image" 

export const Wrapper = styled.div`
    padding: 0 24px;
`

export const Section = styled.section`
  margin: 72px auto 4rem auto; 
  
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr ;
  }
  
`

export const SectionCopy = styled.p`
  grid-column: 1;
  line-height: 1.5;
  
`

export const SectionImg = styled.div`
  grid-column: 2;
  padding-bottom: 1rem;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const StyledImg = styled(GatsbyImage)`
  /* margin: 3rem 0; */
`



export const StyledImg2 = styled(GatsbyImage)`
  width: 300px;
  max-width: 100%;
  margin-right: 3rem;

  @media ${props => props.theme.breakpoints.tablet2} {
    margin-right: 0;
     margin-bottom: 3rem;
    }
  
`

export const StyledImg3 = styled(GatsbyImage)`
 max-width: 100%;
 width: 340px;
 margin-bottom: 1rem;
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

    div {
      @media ${props => props.theme.breakpoints.tablet2} {
        /* display: flex;
        margin: 0 auto;
        flex-direction: column; */
        display: flex;
        flex-direction: column;
        justify-content: center;
  
        align-items: center;
      }
   }
  
`


export const H3 = styled.h3`
  font-size: 2.5rem;
  font-family: "libre caslon text", serif;
  margin-bottom: 3rem;
`
