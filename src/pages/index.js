import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"
import { motion } from "framer-motion"


import SEO from "../components/seo"


export const MainWrapper = styled.main`
  grid-column: 2 / span 12;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />


   <MainWrapper>
    <h1 className="test">Test Media Queries</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>


    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </MainWrapper>
 </Layout>
)

export default IndexPage



// WP: Demi / Demi1187