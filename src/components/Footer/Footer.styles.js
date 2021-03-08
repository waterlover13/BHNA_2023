import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.dark1};
  color: #fff;
  padding: 3rem 24px  2rem 24px;
  /* min-height: 332px; */

  p {
    margin: 0;
    
  }


  @media ${props => props.theme.breakpoints.tablet2} {
    /* height: 480px; */

  }
  
`;


export const Copyright = styled.div`
  /* padding: 0 0 1.5rem 0; */

  margin-top: 24px;

.bhna-copyright{
      font-size: 0.700rem;
      letter-spacing: 0.5px;
      /* text-align: left; */
      color: lightgray;
    
    }
`

export const Content = styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin-bottom: 1.8rem;
  
  

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
      font-size: 0.7rem;
      letter-spacing: 1.2px;
      /* margin-bottom: 2.5rem; */
    }

    @media ${props => props.theme.breakpoints.tablet2} {
    flex-direction: column;
  }
  
   

`

export const FooterBranding = styled.div`

  img {
        width: 8.5rem;
      }

  .sm-line {
    width: 100%;
  }
  
   @media ${props => props.theme.breakpoints.tablet2} {

    width: 200px;
    text-align: center;
    margin-bottom: 2rem;

    img {
      width: 200px;
    }

    .bhna-register {
      font-size: 1rem;
    }
  }
`

export const FooterDiv = styled.div`
  display: flex;

  span {
    color: white;
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.tablet2} {
    flex-direction: column;
  }
   
  .social {
    width: 30%;
  }
`

export const DIV = styled.div`
width: 63%;
margin-left: 2rem;

  

  .socialIcons {
    color: white;
  }

  h4 {
    font-family: "Libre Caslon Text", sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }

  .line {
        height: 1px;
        background-color: lightgray;
        border: none;
        margin: 3px 0 6px 0;
      
      }

 @media ${props => props.theme.breakpoints.tablet2} {
    margin: 1rem 0;
    width: 100%;
    
    h4 {
      font-size: 1.1rem;
      
    }

    .line {
      margin: 10px 0 16px 0;
    }


 }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    
    @media ${props => props.theme.breakpoints.tablet2} {
      justify-content: space-between;
      width: 50%;
      margin: 0 ;
    }
   
`

export const P = styled.p`
display: flex;
color: #DEDEDE;
padding: 3px 0;

  span {
    padding-left: 0.875rem;
   
  }
`