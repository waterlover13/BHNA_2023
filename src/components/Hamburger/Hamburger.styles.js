import styled from "styled-components"

export const HamburgerIcon = styled.div`
    display: block;
    width: 30px;
    z-index: 1000;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin: 40px auto;
    

    :after,
    :before,
    div {
        background-color: white;
        border-radius: 4px; 
        content: "";
        display: block;
        height: 4px;
        margin: 5px 0;
        transition: all 0.2s ease-in-out;
    }

    :before {
        transform: ${props => 
        props.menuOpen ? "translateY(9px) rotate(45deg)" : ""};
    }

    :after {
        transform: ${props => 
        props.menuOpen ? "translateY(-9px) rotate(-45deg)" : ""};
    }

    div {
        transform: ${props => (props.menuOpen ? "scale(0)" : "")};
    }


    @media ${props => props.theme.breakpoints.tablet} {
        display: none;
    }


`

export const HamburgerWrapper = styled.div`
      position: relative;
`