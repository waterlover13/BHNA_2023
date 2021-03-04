import React from "react"
import SEO from "../seo"

import { useLandmarkQuery } from "../../hooks/useLandmarkQuery"

import LandmarkCover from "../LandmarkCover/LandmarkCover"

import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, InnerWrapper, H3, P, FAQ } from "./LandmarkPage.styles"


const LandmarkPage = () => {
   const {
    wpPage: { ACF_LandmarkFAQ: data }
   } = useLandmarkQuery();
   
   
   const imgData2 = getImage(data.landmarkImage2.localFile);

    return (
        <>
        <SEO title="Landmark Information" />
        <LandmarkCover />
        <Wrapper>
             <InnerWrapper>
            <StyledImg image={imgData2} alt="Pasadena City Hall" />

            <FAQ>
            <H3>{data.h3Question1}</H3>
            <P>{data.paragraph1}</P>
            <H3>{data.h3Question2}</H3>
            <P>{data.paragraph2}</P>
            <H3>{data.h3Question3}</H3>
            <P>{data.paragraph3}</P>
            <H3>{data.h3Question4}</H3>
            <P>{data.paragraph4}</P>
            <H3>{data.h3Question5}</H3>
            <P>{data.paragraph5}</P>
            <H3>{data.h3Question6}</H3>
            <P>{data.paragraph6}</P>
            <H3>{data.h3Question7}</H3>
            <P>{data.paragraph7}</P>
            <H3>{data.h3Question8}</H3>
            <P>{data.paragraph8}</P>
            <H3>{data.h3Question9}</H3>
            <P>{data.paragraph9}</P>
            <H3>{data.h3Question10}</H3>
            <P>{data.paragraph10}</P>
           
            <P> <a href={data.paragraph10Link2} target="_blank" rel="noreferrer">Historic Preservation - Planning & Community Development Department (cityofpasadena.net)</a></P>
            <P>{data.paragraph102}</P>
            <P> <a href={data.paragraph10Link} target="_blank" rel="noreferrer">Design Guidelines for Historic Districts</a></P>
           
            <P>{data.paragraph103}</P>
            </FAQ>
            </InnerWrapper>
           
        </Wrapper>
        </>
    )
}

export default LandmarkPage


