import React from "react"

import { useWhatisBungalowQuery } from "../../hooks/useWhatisBungalowQuery"
import { getImage } from "gatsby-plugin-image"
import { Wrapper,StyledImg, Content, ContentCopy, ContentImg, ContentImg3, P } from "./WhatBungalow.styles"

const WhatBungalow = () => {
    const {
        wpPage: { ACF_WhatisBungalowHeaven: data },
    } = useWhatisBungalowQuery();
    console.log(data, "what")

    const imgData = getImage(data.img1.localFile);
    const imgData3 = getImage(data.img3.localFile);

    return (
        <Wrapper>
        <Content>
        <ContentCopy>
        <P>{data.para1}</P>
        <P>{data.para2}</P>
        <P>{data.para3}</P>
        <P>{data.para4}</P>
        <P>{data.para5}</P>
        <P>{data.para6}</P>
        <P>{data.para7}</P>
        <P>{data.para8}</P>
        <P>{data.para9}</P>
        <P>{data.para10}</P>
        <P>{data.para11}</P>
        <P>{data.para12}</P>
        <P>{data.para13}</P>

        </ContentCopy>
      

       <ContentImg>
       <StyledImg image={imgData} alt="something" />
       </ContentImg>

       <ContentImg3>
       <StyledImg image={imgData3} alt="something" />
       </ContentImg3>
       </Content>
        </Wrapper>
    )
}

export default WhatBungalow