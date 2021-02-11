import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

// Styles
import { Primary, GlobalStyles } from "./Layout.styles"
import { ThemeProvider } from "styled-components"
import Theme from "../../themes/theme.js"



const Layout = ({ children }) => {    

    return (
        <>
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
        <Header />
        <Primary>
            Main content

            {children}
        </Primary>
        
        <Footer />
        </ThemeProvider>
        </>
    )
}

export default Layout