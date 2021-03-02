import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dark1};
  color: #fff;
  
  height: 200px;

  p {
    margin: 0;
    padding: 0;
  }
`;


export const Content = styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;

    img {
      width: 6rem;
    }

    .sm-line {
    width: 80px;
    height: 1px;
    opacity: 40%;
    background-color: white;
    margin: 8px 0;
    }

    .bhna-register {
      font-family: "Lusitana", serif;
      text-transform: uppercase;
      font-size: 0.780rem;
      letter-spacing: 1px;
      margin-bottom: 2.5rem;
    }

    .bhna-copyright{
      font-family: "Libre Caslon Text", serif;
      font-size: 0.780rem;
    }

`

export const FooterBranding = styled.div`
    /* align-content: flex-start; */
`

export const FooterNav = styled.div`
/* align-content: flex-end; */
`