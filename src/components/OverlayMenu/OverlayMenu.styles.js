import styled, {createGlobalStyle} from "styled-components"

export const OverrideGlobalStyle = createGlobalStyle`
    body {
        overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
    }
`

export const Overlay = styled.div`
    display: block;
    position: fixed;
    right: ${props => (props.menuOpen ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 10;
    padding: 20px;
    transition: all 0.4s ease;
    box-sizing: border-box;

        /* @media screen and (min-width: 992px) {
            display: none;
        } */

        /* @media ${props => props.theme.breakpoints.tablet} {
            display: none;
    }  */
     
`

export const Nav = styled.ul`
    position: absolute;
    width: 100% ;
    top: 100px;
    list-style-type: none;
    padding: 0;
    font-family: "Lusitana", serif;
    

    a {
        text-decoration: none;
        color: white
    }

    li {
        transition: all 0.5s ease;
        cursor: pointer;
        margin: 24px 16px;
    }
`