import styled from 'styled-components';

export const FooterWrapper = styled.footer`
   grid-column: 2 / span 12;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dark1};
  color: #fff;
  text-align: center;
  height: 200px;

  p {
    margin: 0;
    padding: 0;
  }
`;