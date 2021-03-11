import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useWhatisBungalowQuery } from "../../hooks/useWhatisBungalowQuery"
import { getImage } from "gatsby-plugin-image"
import { Wrapper,StyledImg, Content, Section, SectionCopy, SectionImg  } from "./WhatBungalow.styles"
import "@wordpress/block-library/build-style/style.css"

const WhatBungalow = () => {
    const {
        wpPage: { ACF_WhatisBungalowHeaven: data },
    } = useWhatisBungalowQuery();
    console.log(data, "what")

    const imgData1 = getImage(data.sectionImg1.localFile);
    const imgData2 = getImage(data.sectionImg2.localFile);

    return (
        <Wrapper>
        <SEO title="What is Bungalow Heaven?" />
        <Content>
        
        <Section>
            <SectionCopy>
            {parse(`${data.section1}`)}
            </SectionCopy>
            <SectionImg>
            <StyledImg image={imgData1} alt="something" /> 
            <StyledImg image={imgData2} alt="something" /> 
            </SectionImg>
        
        </Section>


       </Content>
        </Wrapper>
    )
}

export default WhatBungalow