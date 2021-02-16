import styled from "styled-components"

export const RegisterWrapper = styled.div`
    width: 100%;
    background-color: black;
    padding: 4px 0 2px 0;
  

    .bhna-register {
        font-size: 0.775rem;
        font-family: "Lusitana", serif;
        color: #ffff;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: center;
        padding: 8px;
        margin: 0;
    }


    @media ${props => props.theme.breakpoints.tablet} {
        display: none;
    } 

   
`