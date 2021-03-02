import React from "react"
import { Content, Wrapper, PageWrapper, StyledImg } from "./PageHero.styles"

const PageHero = ({ img, title }) => {

return (

<Wrapper>
<StyledImg image={img} alt="Page Hero" />
<PageWrapper>
    <Content>
       <h1>{title}</h1>
    </Content>
</PageWrapper>
</Wrapper>
)

}
export default PageHero

