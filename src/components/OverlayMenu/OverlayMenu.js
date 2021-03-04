import React, { useState, useRef } from "react"
import { Link } from "gatsby"

import { useMenuQuery } from "../../hooks/useMenuQuery";
import { OverrideGlobalStyle, Overlay, Nav } from "./OverlayMenu.styles";



const OverlayMenu = ({ menuOpen }) => {
    const { menu } = useMenuQuery();

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    // console.log(menu)
    
   

   


    return (
        <>
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
                     onClick={onClick}
                     >
                        
                        {mainItem.label}
                        {mainItem.childItems.nodes.length !== 0 && <div className="chevron">&#8964;</div>}
                     </Link>
                   
                     {mainItem.childItems.nodes.length !== 0 ? (
                        <ul 
                        // className="dropdown-nav"
                        // ref={dropdownRef}
                        
                        >
                            {mainItem.childItems.nodes.map(childItem => (
                                <li 
                                key={childItem.id} 
                                ref={dropdownRef}
                                >
                                  
                                    <Link 
                                    to={childItem.url}
                                    // className="dropdown-nav__item"
                                    activeClassName="nav-active"
                                    // className="menu-trigger"
                                    
                                    className={`menu ${isActive ? "active" : "inactive"}`}
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
        </>
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