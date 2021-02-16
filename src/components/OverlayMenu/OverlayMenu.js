import React from "react"
import { Link } from "gatsby"

import { useMenuQuery } from "../../hooks/useMenuQuery"
import { OverrideGlobalStyle, Overlay, Nav } from "./OverlayMenu.styles"


const OverlayMenu = ({ menuOpen }) => {
    const { menu } = useMenuQuery();

    return (
        <>
        <OverrideGlobalStyle menuOpen={menuOpen}/>
        <Overlay menuOpen={menuOpen} >
           
                <Nav>
                   {menu.menuItems.nodes.map(item => (
                       !item.parentId ? (
                        <li key={item.id}>
                            <Link to={item.url} >
                                {item.label}
                            </Link>
                        </li>
                       ) : null
                   ))}
                </Nav>    
             
        </Overlay>
        </>
    )
}

export default OverlayMenu
