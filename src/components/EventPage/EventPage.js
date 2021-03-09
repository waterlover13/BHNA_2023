import React from 'react'
import HomeTourCover from "../HomeTourCover/HomeTourCover"
import SEO from "../seo"
import { getImage } from "gatsby-plugin-image"
import { useEventInfoQuery } from "../../hooks/useEventInfoQuery"

import { Wrapper, H3, StyledImg, InnerWrapper, Paragraph, SponsorWrapper, SponsorContent, StyledImg2, StyledImg3 } from "./EventPage.styles"


const EventPage = () => {
     
    const {
        wpPage: { ACF_EventTour: data },
    } = useEventInfoQuery();
    console.log(data, "baby")

    const imgData = getImage(data.tourImage2.localFile);
    const imgData1 = getImage(data.sponsorImg1.localFile);
    const imgData2 = getImage(data.sponsorImg2.localFile);
    const headline = data.tourHeadline;
    const para1 = data.tourParagraph;
    const para2 = data.tourParagraph2;
    const sponsor = data.sponsorHeading;

    

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
            

            <SponsorWrapper>  
                <SponsorContent>
                <H3>Thank you to our <span className="g-sponsors">Gold Sponsors</span>  </H3>
                    <div>
                <StyledImg2 image={imgData1} alt="HomeTour" />
                <StyledImg3 image={imgData2} alt="HomeTour" />
                    </div>
             
                </SponsorContent>
            </SponsorWrapper>
        </div>
    )
}

export default EventPage