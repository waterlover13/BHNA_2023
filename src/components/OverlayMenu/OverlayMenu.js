import React from "react"
import { Link } from "gatsby"

import { useMenuQuery } from "../../hooks/useMenuQuery";
import { OverrideGlobalStyle, Overlay, Nav, OverlayBG } from "./OverlayMenu.styles";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const OverlayMenu = ({ menuOpen }) => {
    const { menu } = useMenuQuery();

    // const dropdownRef = useRef(null);
    // const [isActive, setIsActive] = useState(false);
    // const onClick = () => setIsActive(!isActive);
    // console.log(menu)
    
   

   


    return (
        <OverlayBG>
        <OverrideGlobalStyle menuOpen={menuOpen}/>
        <Overlay menuOpen={menuOpen}> 
                <Nav>
                 {menu.menuItems.nodes.map( mainItem => !mainItem.parentId ? (
                    <li 
                    key={mainItem.id}
                    className="parentItem" 
                    >
                     <Link 
                     to={mainItem.url} 
                     className=""
                     activeClassName="nav-active"
                     
                     >
                        {mainItem.label}
                        {mainItem.childItems.nodes.length !== 0 && <KeyboardArrowDownIcon />}
                     </Link>
                   
                     {mainItem.childItems.nodes.length !== 0 ? (
                        <ul>
                            {mainItem.childItems.nodes.map(childItem => (
                                <li 
                                key={childItem.id} 
                                className="child-item"
                                >
                                  
                                    <Link 
                                    to={childItem.url}
                                    // className="dropdown-nav__item"
                                    activeClassName="nav-active"
                                    >
                                    {childItem.label}
                                    </Link>
                               
                                </li>
                            ))}

                        </ul>
                     ) : null }
                    
                    
                    </li>
                    ) : null    
                 )}
                </Nav>    
        </Overlay>
        </OverlayBG>
    )
}

export default OverlayMenu

// {menu.menuItems.nodes.map(item => (
//     !item.parentId ? (
//      <li key={item.id}>
//          <Link to={item.url} >
//              {item.label}
//          </Link>
//      </li>
//     ) : null
// ))}