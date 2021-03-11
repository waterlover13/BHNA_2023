import React from "react"
import SEO from "../seo"
import parse from 'html-react-parser'

import { useBuildingReqQuery } from "../../hooks/useBuildingReqQuery"

import { Wrapper, Section, SectionCopy} from "./BuildingReqPage.styles"
import "@wordpress/block-library/build-style/style.css"



const BuildingReqPage = () => {
    const {
        wpPage: { ACF_BuildingReq: data },
    } = useBuildingReqQuery();
    console.log(data, "Event")
    
    return (
        <Wrapper>
            <SEO title="Bungalow Heaven Home Tour" />  
            <Section>
                <SectionCopy>
                {parse(`${data.section1}`)}
                </SectionCopy>
            </Section>
        </Wrapper>
    )
}

export default BuildingReqPage