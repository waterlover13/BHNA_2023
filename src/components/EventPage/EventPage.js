import React from 'react'
import HomeTourCover from "../HomeTourCover/HomeTourCover"
import SEO from "../seo"
import { getImage } from "gatsby-plugin-image"
import { useEventInfoQuery } from "../../hooks/useEventInfoQuery"

import { Wrapper, StyledImg, InnerWrapper, Paragraph } from "./EventPage.styles"
import JoinBHNA from "../JoinBHNA/JoinBHNA"

const EventPage = () => {
     
    const {
        wpPage: { ACF_EventTour: data },
    } = useEventInfoQuery();
    console.log(data, "baby")

    const imgData = getImage(data.tourImage2.localFile);
    const headline = data.tourHeadline;
    const para1 = data.tourParagraph;
    const para2 = data.tourParagraph2;

    

    return (
        <div>
            <SEO title="Bungalow Heaven Home Tour" />  
            <HomeTourCover />
           
            <Wrapper>
                <InnerWrapper>
                <div>
                <h2>{headline}</h2>
                <Paragraph>{para1}</Paragraph>
                <Paragraph>{para2}</Paragraph>
                </div>
                <div>
                <StyledImg image={imgData} alt="HomeTour" />
                </div>
                </InnerWrapper>   
            </Wrapper>
            <JoinBHNA />
        </div>
    )
}

export default EventPage