import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"
import SEO from "../components/seo"


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: olive;
  color: white;
  text-align: center;
`

const InnerWrapper = styled.div`
  
  
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <InnerWrapper>

    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <br />
    <iframe src="https://giphy.com/embed/l1KVaj5UcbHwrBMqI" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lifetimetv-adorable-babies-l1KVaj5UcbHwrBMqI"></a></p>
      </InnerWrapper>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
