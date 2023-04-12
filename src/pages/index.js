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
  <h1>Welcome to my BHNA home page</h1>
    <SEO title="Bungalow Heaven" />

    <Hero />
    <HistorySection />
    <JoinBHNA />
    
 </Layout>
)
}

export default IndexPage
