import styled from "styled-components"

export const JoinWrapper = styled.section`
   

    padding: 4.4rem 0;

    background-color: ${props => props.theme.colors.secondary};
`

export const Content = styled.div`
   max-width: 1290px;
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.colors.light1};

    p {
        width: 60%;
        margin: 0 auto;
        font-family: ${props => props.theme.fonts.secondary};
        font-size: 24px;
        line-height: 1.2;
        padding: 24px 0;
        margin-bottom: 2rem;
        letter-spacing: 0.5px;

        @media ${props => props.theme.breakpoints.tablet2} {
      font-size: 1.2rem;
      line-height: 1.3;
      width: 100%;
       }
    }

    .support-btn{
        padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;

      @media ${props => props.theme.breakpoints.tablet2} {
      min-width: 300px;
       }
      
    }

    .support-btn:hover {
        background-color: #fff;
      color: black;
    }


    .join-btn {
      
      padding: 10px 32px;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s ease;
      
  }
  
  .join-btn:hover {
      background-color: #fff;
      color: black;
  }


  @media ${props => props.theme.breakpoints.tablet2} {
      padding: 0 20px;
       }

`


export const BTN = styled.div`
    margin-right: 2rem ;
    display: inline-block;

    @media ${props => props.theme.breakpoints.tablet2} {
        display: flex;
        flex-direction: column;
        margin: 2.3rem 0;
        padding: 0 4rem;
       }
    
    
`

export const innerBTNWrapper = styled.div`
    max-width: 300px;
    
`