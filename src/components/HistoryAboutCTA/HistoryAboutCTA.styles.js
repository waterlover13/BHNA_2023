import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: 1fr; */
  display: flex;
  flex-direction: row;
  background: #FAFAFA;
  padding: 0 0 0 24px;
  /* margin: 0  auto; */

  @media ${props => props.theme.breakpoints.tablet2} {
    flex-direction: column;
    padding: 0 ;
    margin: 0 ;
  }
  
  

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.4fr 1fr;
    text-align: left;
  }

  .about-text {
    /* padding: 40px 20px 40px 260px; */
   


    @media screen and (max-width: 768px) {
      padding: 20px;
      
    }
  }
`;

export const AboutText = styled.div`
  
  /* max-width: 616px;
  margin: 0 24px 0 auto; */
  /* max-width: 1280px; */
  /* padding: 64px 24px;
  max-width: 680px; */
  
  /* margin: 0 2rem 0 auto; */
  /* margin: 0 8% 0 auto;
  width: 50%;
  max-width: 540px;
  padding: 64px 24px; */

  padding: 72px 24px;
  width: 70%;
  max-width: 520px;
  margin: 0 auto;

  .history-text {
    margin-bottom: 2.3rem;
    line-height: 1.5;
  }

  .about-btn {
      padding: 10px 32px;
      border: 2px solid #191D07;
      color: ${props => props.theme.colors.main1};
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;
      
  }
  
  .about-btn:hover {
      background-color: ${props => props.theme.colors.main1};
      color: whitesmoke;
  }

 

    @media ${props => props.theme.breakpoints.tablet2} {
      width: 100%;
      margin: 1rem auto 2rem 0;
      
      /* margin: 1rem auto 2rem 0; */
      padding: 56px 24px;
      /* margin:  auto 0; */
      max-width: 88%;
  }
`


export const ImgWrapper = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  
  width: 100%;
  max-width: 832px;
  /* max-width: 800px;
  min-height: 300px; */
  
  @media ${props => props.theme.breakpoints.tablet2} {
      width: 100%;
      max-width: 100%;
      min-height: 360px;
      margin-bottom: 2rem;
  }
`;
