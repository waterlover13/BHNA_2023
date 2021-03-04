import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
    
    /* background-size: cover;
    background-position: top;
    object-position:  top; */
    max-width: 100%;
    height: 348px; 
    min-height: 100%;
    
    img {
    object-position:  16% 20%;
    }

    @media ${props => props.theme.breakpoints.tablet2} {
      height: 260px; 
      min-height: 100%;
    }
`

export const Wrapper = styled.div`
    


`

export const PageWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,.8), rgba(32, 31, 31, .5) 100%); 
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 348px;  
  /* min-height: 100%; */
  
  
 @media ${props => props.theme.breakpoints.tablet2} {
    top: 40px;
    left: 0;
    height: 366px;
    min-height: 368px;
    
   }

`

export const Content = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
 

    h1 {
      font-family: ${props => props.theme.fonts.secondary};
      color: #fff;
      font-size: 3.3rem;
      margin-top: 3rem;

      @media ${props => props.theme.breakpoints.tablet2} {
        margin-top: 6rem;
     } 
    }

    /* @media ${props => props.theme.breakpoints.desktop} {
      max-width: 1060px;
      } */

     

`