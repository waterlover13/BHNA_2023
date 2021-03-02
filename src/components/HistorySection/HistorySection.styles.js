import styled from "styled-components"

export const HistoryWrapper = styled.div`
        

`

export const HistoryCTAWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 5rem 0;

    @media ${props => props.theme.breakpoints.tablet2} {

      padding: 1.3rem 0;

      h2 {
        padding: 0 20px;
      }
  }

    @media ${props => props.theme.breakpoints.desktop} {
      max-width: 1060px;
      
    } 
    
`