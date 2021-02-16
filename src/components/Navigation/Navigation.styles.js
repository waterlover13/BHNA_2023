import styled from 'styled-components';

export const NavWrapper = styled.nav`
  font-family: 'Lusitana', serif;
  color:  ${props => props.theme.colors.dark1};
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  display: none;

  .nav-active {
    color: #ee2562;
  }


  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1rem;
    display: block;
    } 


/* 
  @media (min-width: 1200px) {
    font-size: 1rem;
  } */

  ul li {
    display: block;
    margin: 0 10px 0 0;
    float: left;
    height: 30px;
    position: relative;

    a {
      display: flex;
      padding: 0 0 0 10px;
      transition: all 0.2s ease;
      text-decoration: none;
      color:  ${props => props.theme.colors.light1};

      div {
        margin: -4px 0 0 5px;
      }
    }
  }

  ul li:last-child {
    margin: 0;
  }

  ul li:hover > ul {
    display: block;
  }

  ul li a:hover {
    color: ${props => props.theme.colors.active1};
  }

  ul ul {
    animation: fadeInMenu 0.3s both ease-in;
    display: none;
    position: absolute;
    left: 0;
    margin: 0;
    top: 24px;
    text-transform: none;
    border-radius: 4px;
    background: #fff;
    padding: 10px 12px 12px 10px;
    box-shadow: 0px 6px 23px -10px rgba(0, 0, 0, 0.5);
  }

  ul ul li {
    width: auto;
    min-width: 170px;
    height: 100%;
  }

  ul ul li a {
    padding: 10px 10px;
    text-decoration: none;
    white-space: nowrap;
  }

  ul ul li a:hover {
    color: ${props => props.theme.colors.active2};
  } 

  .dropdown-nav__item {
    color: ${props => props.theme.colors.dark2};
  }

  @keyframes fadeInMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
