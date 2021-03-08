import styled, {createGlobalStyle} from "styled-components"

export const OverrideGlobalStyle = createGlobalStyle`
    body {
        overflow: ${props => (props.menuOpen ? "hidden" : "auto")}
    }
`

export const OverlayBG = styled.div`
    position: relative;
    /* height: 100%; */
`

export const Overlay = styled.div`
    display: block;
    position: fixed;
    right: ${props => (props.menuOpen ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 3rem;
    
    -webkit-overflow-scrolling: touch;
    background: #000000;
    z-index: 10;
    /* padding: 20px; */
    transition: all 0.4s ease;
    box-sizing: border-box;     
`


export const Nav = styled.ul`
    position: absolute;
    width: 100% ;
    top: 3.1rem;
    list-style-type: none;
    padding: 0;
    font-family: "Lusitana", serif;
    font-size: 1.3rem;

    .nav-active {
        color: ${props => props.theme.colors.active2}; 
    }

    .parentItem {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #212121;
        margin: 8px 24px;
        padding-bottom: 8px;
        .chevron {
            padding-left: 10px;
            padding-bottom: 8px;
        }
    }

    li li a {
        color: whitesmoke;
    }

    a {
        text-decoration: none;
        color: white;
        transition: all 0.3s ease;
        letter-spacing: 0.2px;
    }

    li {
        transition: all 0.5s ease;
        cursor: pointer;
        margin: 24px 16px;
        list-style-type: none;
    }

    a:hover {
     color: ${props => props.theme.colors.active2}; 
    }

    .child-item {
        font-size: 1.3rem;
        padding-bottom: 0;
        margin-bottom: 0.8rem;
    }

`