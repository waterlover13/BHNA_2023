import React from "react"
import { useCTAQuery } from "../../hooks/useCTAQuery"

import CTA from "../CTA/CTA"

import { Wrapper } from "./HistoryCTA.styles"


const CTAArea = () => {
    const { cta } = useCTAQuery();
    console.log(cta, "cta")
    //console.log(cta)


    return (
        <Wrapper>
            
            {new Array(3).fill("").map((element, i) => (
                <CTA
                key={i}
                image={
                    cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp.gatsbyImageData
                }
                link={cta.ACF_HomePage[`cta${i + 1}Link`]}
                text={cta.ACF_HomePage[`cta${i + 1}Text`]}
                title={cta.ACF_HomePage[`cta${i + 1}Title`]}
                />
            ))}
        </Wrapper>
    )
}

export default CTAArea