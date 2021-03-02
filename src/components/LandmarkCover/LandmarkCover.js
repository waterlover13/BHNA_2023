import React from "react"
import { useLandmarkQuery } from "../../hooks/useLandmarkQuery"

import { getImage } from "gatsby-plugin-image"
import { StyledImg, ParagraphIntro, Wrapper } from "./LandmarkCover.styles"

const LandmarkPage = () => {
   const {
    wpPage: { ACF_LandmarkFAQ: data}
   } = useLandmarkQuery();
   
   const imgData = getImage(data.landmarkImage1.localFile); 

   return (
           <Wrapper>
            
            <ParagraphIntro>{data.description}</ParagraphIntro>
            <StyledImg image={imgData} alt="Pasadena City Hall" />
            </Wrapper>
            
    )
}
export default LandmarkPage