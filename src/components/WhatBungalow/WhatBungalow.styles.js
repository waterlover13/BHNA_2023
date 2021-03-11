import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
     
   padding: 0 24px;
    
`

export const Content = styled.div`
/* max-width: ${props => props.theme.max.large};
   margin: 4rem auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 2rem;
    grid-template-areas:
              "L R"
              "L ."
              "L ."
              ". .";  

    @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr;
    grid-template-areas:
              "T"
              "."
              "."
              ".";  

    max-width: ${props => props.theme.max.medium};
   
   
  } */
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
  padding: 10px 0 1rem 0;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const StyledImg = styled(GatsbyImage)`
  margin-bottom: 5rem;
`

export const ContentCopy = styled.div`
  /* grid-column: 1;
  grid-area: L;

    @media ${props => props.theme.breakpoints.tablet2} {
      display: block;
      grid-area: auto;
  } */
    
`

export const ContentImg = styled.div`
    width: 100%;
    grid-column: 2;
  grid-area: R;



    @media ${props => props.theme.breakpoints.tablet2} {
      grid-column: 1;
      grid-area: T;
      max-width: 100%;
  }
`

export const ContentImg3 = styled.div`
    width: 100%;
    grid-column: 2;
  grid-area: ".";

 

    @media ${props => props.theme.breakpoints.tablet2} {
      grid-column: 1;
      grid-area: T;
      max-width: 100%;
  }
`

export const P = styled.div`
    color: ${props => props.theme.colors.dark1};
    margin: 0 0 1rem 0;
    line-height: 1.5;
    
`