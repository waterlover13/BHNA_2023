import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useEarlyHistoryQuery } from "../../hooks/useEarlyHistoryQuery"
import { getImage } from "gatsby-plugin-image"
import { Section, SectionCopy, SectionImg, Wrapper, StyledImg, Content } from "./EarlyHistory.styles"
import "@wordpress/block-library/build-style/style.css"

const EarlyHistory = () => {
    const {
        wpPage: { ACF_EarlyHistory: data},
    } = useEarlyHistoryQuery(); 
    console.log(data, "come")
    const imgData1 = getImage(data.sectionImg1.localFile);
    const imgData2 = getImage(data.sectionImg2.localFile);
       
    return (

        <Wrapper>
        <SEO title="Early History of Pasadena" />
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
            <SectionImg>
            <StyledImg image={imgData2} alt="something" /> 
            </SectionImg>
        </Section>
        
        <Section>
            <SectionCopy>
            {parse(`${data.section3}`)}
            </SectionCopy>
        </Section>

        <Section>
            <SectionCopy>
            {parse(`${data.section4}`)}
            </SectionCopy>
        </Section>

        <Section>
            <SectionCopy>
            {parse(`${data.section5}`)}
            </SectionCopy>
        </Section>
       
        
      

       
       </Content>
        </Wrapper>
    )
}

export default EarlyHistory
