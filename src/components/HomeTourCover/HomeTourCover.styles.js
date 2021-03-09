import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
   display: flex;
   background-color: ${props => props.theme.colors.main3};
   color: #fff;
  width: 100%;
  /* max-height: 480px; */

  @media ${props => props.theme.breakpoints.tablet2} {
    flex-direction: column;
    max-height: 100%;
  }
  
`



export const StyledImg = styled(GatsbyImage)`
  /* max-height: 460px; */
  /* margin-bottom: 60px; */
  max-width: 600px;
  
  @media ${props => props.theme.breakpoints.tablet2} {
    max-height: 100%;
    /* height: 700px; */
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    max-width: 100%;
    max-height: 580px;
  }
  
`

export const TourDetails = styled.div`
    width: 100%;
    padding: 6rem 5rem 5rem 8.8rem;
    
    margin-left: auto; 
    border-right: 6px solid #fff;
    
    button {
      margin-top: 1.3rem;
      padding: 10px 32px;
      border: none;
      color: black;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;
      text-transform: uppercase;
    
      font-weight: bold;
      letter-spacing: 0.8px;
      outline: none;
      cursor: pointer;

      @media ${props => props.theme.breakpoints.tablet2} {
      width: 80%;
      margin: 1rem auto;
       }
    }

    button:hover {
        background-color: black;
        color: white;
    }
    
    .support-btn{
      padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;

      @media ${props => props.theme.breakpoints.tablet2} {
      width: 300px;
      margin: 0 auto;
       }
      
    }

    .tour__headline {
      font-size: 3.3rem;
      font-family: ${props => props.theme.fonts.secondary};
      font-weight: bold;
      letter-spacing: 1px;
    }

    .tour__sub-headline {
      font-family: ${props => props.theme.fonts.secondary};
      font-size: 2rem ;
      letter-spacing: 1px;
    }

    .tour__online {
      font-size: 1.2rem;
      color: orange;
    }

    .tour__info {
      font-size: 1.2rem;
      letter-spacing: 1px;
    }

    @media ${props => props.theme.breakpoints.tablet2} {
      border-right: 0;
      border-bottom: 6px solid #fff;
      padding: 3rem 2rem;
    }
    
`

export const Seperator = styled.div`
    width: 88px;
    height: 1px;
    background-color: #fff;
    margin: 24px 0; 

`