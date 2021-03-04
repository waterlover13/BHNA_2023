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
    font-size: 2rem;

    .parentItem {
        display: flex;
        /* justify-content: start;  */
        /* align-items: center;
        background-color: peru; */
        
        .chevron {
            padding-left: 10px;
            padding-bottom: 8px;
        }
    }

        .menu {
            background: peru;
            /* border-radius: 8px; */
            /* position: absolute;
            top: 60px;
            right: 0; */
            /* width: 300px; */
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-20px);
            transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
            }

        .menu-trigger {
            background: #ffffff;
            border-radius: 90px;
            cursor: pointer;
            /* display: flex;
            justify-content: space-between;
            align-items: center; */
            padding: 4px 6px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            border: none;
            vertical-align: middle;
            transition: box-shadow 0.4s ease;
            /* margin-left: auto; Strictly for positioning */
            }



        .menu.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
       
       

    a {
        text-decoration: none;
        color: white
    }

    li {
        transition: all 0.5s ease;
        cursor: pointer;
        margin: 24px 16px;
        list-style-type: none;
        
    }

    /* .dropdown-nav {
        display: none;
    } */
`