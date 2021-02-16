import styled, { createGlobalStyle } from 'styled-components'



export const Primary = styled.main`
  /* padding: 110px 0 0 0; */




 
`;


export const ContainerWrapper = styled.div`
    /* height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;
    grid-template-rows: 7.8rem 20rem 5rem auto;
    gap: 0 2rem; */
`


export const GlobalStyles = createGlobalStyle`
   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    body, html {
        font-family: "Noto Sans", sans-serif;
        height: 100%;
        
    }

`;