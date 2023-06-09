import styled from 'styled-components';

export const Wrapper = styled.div`
  

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  margin-top: 20px;
  
  

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    grid-template-columns: 1fr;
    /* padding: 0 20px; */
  }
`;

