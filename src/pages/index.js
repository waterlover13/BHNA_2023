import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import HistorySection from "../components/HistorySection/HistorySection"
import JoinBHNA from "../components/JoinBHNA/JoinBHNA"
import SEO from "../components/seo"

export default function Home({ data }) {
  //highlight-line
  return (
  <Layout>
    <SEO title="Bungalow Heaven" />


    <HistorySection />
    <JoinBHNA />
    
 </Layout>
)
}

