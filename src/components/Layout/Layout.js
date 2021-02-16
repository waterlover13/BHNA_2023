import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import NationalRegister from "../NationalRegister/NationalRegister"

// Styles
import { ContainerWrapper, Primary, GlobalStyles } from "./Layout.styles"
import { ThemeProvider } from "styled-components"
import Theme from "../../themes/theme.js"



const Layout = ({ children }) => {    
        // const [menuOpen, setMenuOpen ] = useState(false)


    return (
        <>
        <GlobalStyles />
        <ThemeProvider theme={Theme}>
        
        {/* <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <OverlayMenu menuOpen={menuOpen} /> */}
        <NationalRegister />
        <Header />
        <Primary>
            {children}
        </Primary>
        <Footer />
        </ThemeProvider>
        
        </>
    )
}

export default Layout