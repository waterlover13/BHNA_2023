import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 24px;
`



export const Section = styled.section`
  margin: 72px auto 4rem auto; 
  padding: 0 24px;
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  h3 {
    
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr ;
  }
  
`

export const SectionCopy = styled.p`
  grid-column: 1;
  line-height: 1.5;
  
`
