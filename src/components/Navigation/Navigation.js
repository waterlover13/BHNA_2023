import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => (
    <NavWrapper>
        <ul>
           {menu.map( mainItem => 
               !mainItem.parentId ? (
                <li key={mainItem.id}>
                    <Link to={mainItem.url} activeClassName="mnav-active">
                        {mainItem.label}
                        {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                    </Link>
                    {mainItem.childItems.nodes.length !== 0 ? (
                        <ul className="dropdown-nav">
                            {mainItem.childItems.nodes.map(childItem => (
                                <li key={childItem.id}>
                                    <Link to={childItem.url} className="dropdown-nav__item" activeClassName="nav-active">
                                        {childItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null }
                </li>
               ) : null
           )}
        </ul>
    </NavWrapper>
)

export default Navigation