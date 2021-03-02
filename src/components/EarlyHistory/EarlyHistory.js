import React from "react"

import { useEarlyHistoryQuery } from "../../hooks/useEarlyHistoryQuery"
import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, ContentCopy, ContentImg, P, H3 } from "./EarlyHistory.styles"

const EarlyHistory = () => {
    const {
        wpPage: { ACF_EarlyHistory: data},
    } = useEarlyHistoryQuery(); 

    const imgData = getImage(data.img1.localFile);

    return (

        <Wrapper>
            <ContentCopy>
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
        </Wrapper>
    )
}

export default EarlyHistory