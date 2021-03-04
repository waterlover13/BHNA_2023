import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 110px;
  padding: 0 24px;
  width: 100%;
  z-index: 3;
  position: absolute;

  @media ${props => props.theme.breakpoints.tablet2} {
    position: relative;
    background-color: ${props => props.theme.colors.main1};
  }
  

`;

export const Content = styled.div`
  max-width: ${props => props.theme.max.large};
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 100%;
  /* max-width: 1180px; */
  /* margin: 0 auto;
  padding: 0 20px; */


  .bhna-branding {
    display: flex;
    justify-content: center; 
    align-items: center;
    text-decoration: none;
  }

  /* .national-register {
    display: flex;
    
  } */

  img {
    width: 140px;
    
    
  }

  .sm-line {
    /* margin: 1px 0; */
    height: 80px;
    width: 1px;
    opacity: 40%;
    background-color: white;
    margin: 0 12px;
  }

  .bhna-register {
    color: #ffff;
    font-family: "Lusitana", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 0.70rem;
    letter-spacing: 0.8px;
    align-self: center;
    justify-content: center;
    text-decoration: none;
    
  }

  .register {
    align-self: center;
    justify-content: center;
  }

 

  /* @media screen and (max-width: 993px) {

    .bhna-branding {
      padding-top: 24px;
      flex-direction: column;
      justify-content: flex-start;
      align-content:flex-start;
    }

    img {
      width: 120px;
      margin-bottom: 12px;
    }

    .bhna-register {
      font-size: 0.6rem;
      margin-top: -1px;
    }

    .sm-line {
      display: none;
    }
  } */


    @media ${props => props.theme.breakpoints.tablet2} {
      

    img {
      width: 120px;
      
    }

    .bhna-register {
     display: none;
    }

      .sm-line {
        display: none;
      }  
    }

    /* @media ${props => props.theme.breakpoints.desktop} {
      max-width: 1060px;
    }  */
`;

