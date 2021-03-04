import React from "react"
import SEO from "../seo"
import {useBungalowOriginsQuery } from "../../hooks/useBungalowOriginsQuery"

import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, ContentCopy, ContentImg, P, H3, Content } from "./BungalowOrigins.styles"

const BungalowOrigins = () => {
    const {
        wpPage: {ACF_BungalowOrigins: data }
    } = useBungalowOriginsQuery();

    const imgData = getImage(data.img1.localFile);

    return (
        <Wrapper>
        <SEO title="Bungalow Heaven Origins" />
        <Content>
        <ContentCopy>
            <h2>{data.description}</h2>
            <H3>{data.title1}</H3>
            <P>{data.para1}</P>
            <P>{data.para2}</P>
            <P>{data.para3}</P>

            <H3>{data.title2}</H3>
            <P>{data.para4}</P>

            <H3>{data.title3}</H3>
            <P>{data.para5}</P>
            <P>{data.para6}</P>

            <H3>{data.title4}</H3>
            <P>{data.para7}</P>
            <P>{data.para8}</P>
            <P>{data.para9}</P>

            <H3>{data.title5}</H3>
            <P>{data.para10}</P>
            <P>{data.para11}</P>
            <P>{data.para12}</P>

            <H3>{data.title6}</H3>
            <P>{data.para13}</P>
            <P>{data.para14}</P>
    </ContentCopy>

            <ContentImg>
            <StyledImg image={imgData} alt="something" />
            </ContentImg>
    </Content>
    </Wrapper>
    )
}

export default BungalowOrigins