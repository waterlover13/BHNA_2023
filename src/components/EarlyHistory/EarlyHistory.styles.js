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
  padding: 4rem 0;

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-column: 1;
    padding: 0;
  }
`

export const Content = styled.div`
 
`


// export const Content = styled.div`
//    max-width: ${props => props.theme.max.large};
//    margin: 4rem auto;

//    display: grid;
//    grid-template-columns: 1fr 1fr;
//     grid-gap: 2rem;
//     grid-template-areas:
//               "L R"
//               "L ."
//               "L ."
//               ". .";  ;

//    @media ${props => props.theme.breakpoints.desktop} {
    
//   }

//     @media ${props => props.theme.breakpoints.tablet2} {
//     grid-template-columns: 1fr;
//     grid-template-areas:
//               "T"
//               "."
//               "."
//               ".";  
//     max-width: ${props => props.theme.max.medium};
   
  
//   }
// `



export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  /* @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    max-width: 100%;
    max-height: 580px;
  }  */
`

export const ContentCopy = styled.div`
  grid-column: 1;
  grid-area: L;

  /* @media ${props => props.theme.breakpoints.desktop} {
    display: block;
    grid-area: auto;
    max-width: ${props => props.theme.max.medium};
  } */

    @media ${props => props.theme.breakpoints.tablet2} {
      display: block;
      grid-area: auto;
  }
    
`

export const ContentImg = styled.div`
    width: 100%;
    grid-column: 2;
  grid-area: R;

  /* @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 1;
    grid-area: T;
    max-width: 80%;
    
  } */

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

  /* @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 1;
    grid-area: T;
    max-width: 80%;
    
  } */

    @media ${props => props.theme.breakpoints.tablet2} {
      grid-column: 1;
      grid-area: T;
      max-width: 100%;
  }
`

export const P = styled.p`
  color: ${props => props.theme.colors.dark1};
  line-height: 1.5;
  padding-bottom: 1.5rem; 
    
`

export const H3 = styled.h3`
  color: ${props => props.theme.colors.dark1};
  font-size: 1.5rem;
  font-family: "libre caslon text", serif;
  line-height: 1.4;
  padding-bottom: 0.5rem; 
    
`