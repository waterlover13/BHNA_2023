import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImgWrapper = styled.div`
  
  
  margin-bottom: 0.5rem;
  background-color: #FBFBFB;
  border: 1px solid #DFDFDF;
  border-radius: 3px;
  padding: 2rem;
 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
`

export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  
  
  @media ${props => props.theme.breakpoints.tablet2} {
   max-width: 100%;
   width: 100%;
  
  }
`



export const Wrapper = styled.div`

  margin: 2rem 0;
  
  
  @media (min-width: 768px) {
    /* max-height: 200px; */
  }

  @media ${props => props.theme.breakpoints.tablet2} {
   margin-bottom: 2rem;
  }
`



export const ProductPrice = styled.p`
  font-size: 1.3rem;
  margin-left: auto;

`

export const ProductName = styled.h3`
font-size: 1.3rem;
  color: #191D07;
  
  margin-bottom: 0.5rem;

  @media ${props => props.theme.breakpoints.tablet2} {
   margin-top: 0.2rem;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  padding: 0.5rem 1rem ;
`
