import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import {useBungalowOriginsQuery } from "../../hooks/useBungalowOriginsQuery"
import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, Content,Section, SectionCopy, SectionImg } from "./BungalowOrigins.styles"
import "@wordpress/block-library/build-style/style.css"

const BungalowOrigins = () => {
    const {
        wpPage: {ACF_BungalowOrigins: data }
    } = useBungalowOriginsQuery();

    const imgData1 = getImage(data.sectionImg1.localFile);

    return (
        <Wrapper>
        <SEO title="Bungalow Heaven Origins" />
        <Content>
        <Section>
            <SectionCopy>
            {parse(`${data.section1}`)}
            </SectionCopy>
            <SectionImg>
            <StyledImg image={imgData1} alt="something" /> 
            </SectionImg>
        
        </Section>

        <Section>
            <SectionCopy>
            {parse(`${data.section2}`)}
            </SectionCopy>
        
        </Section>
    </Content>
    </Wrapper>
    )
}

export default BungalowOrigins