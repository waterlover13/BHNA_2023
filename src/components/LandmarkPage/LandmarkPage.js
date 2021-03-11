import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useLandmarkQuery } from "../../hooks/useLandmarkQuery"

import LandmarkCover from "../LandmarkCover/LandmarkCover"

import { getImage } from "gatsby-plugin-image"
import { Wrapper, StyledImg, InnerWrapper, Section, SectionCopy, SectionImg } from "./LandmarkPage.styles"
import "@wordpress/block-library/build-style/style.css"

const LandmarkPage = () => {
   const {
    wpPage: { ACF_LandmarkFAQ: data }
   } = useLandmarkQuery();
   
   
   const imgData1 = getImage(data.sectionImg1.localFile);

    return (
        <>
        <SEO title="Landmark Information" />
        <LandmarkCover />
        <Wrapper>
             <InnerWrapper>
             <Section>
            <SectionCopy>
            {parse(`${data.section1}`)}
            </SectionCopy>

            <SectionImg>
            <StyledImg image={imgData1} alt="Pasadena City Hall" /> 
            </SectionImg>
            </Section> 

        

           
            </InnerWrapper>
           
        </Wrapper>
        </>
    )
}

export default LandmarkPage


