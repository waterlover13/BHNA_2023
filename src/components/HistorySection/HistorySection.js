import React from "react"
import HistoryCTA from "../HistoryCTA/HistoryCTA"
import HistoryAboutCTA from "../HistoryAboutCTA/HistoryAboutCTA"

import { HistoryWrapper, HistoryCTAWrapper, InnerWrappper } from "./HistorySection.styles"

const HistorySection = () => {

    return(
        <HistoryWrapper>
        
        <div>
        <HistoryAboutCTA />
        </div>
        
        <InnerWrappper>
        <HistoryCTAWrapper>
        <h2>Our History</h2>
        <HistoryCTA />
        </HistoryCTAWrapper>
        </InnerWrappper>
        </HistoryWrapper> 
    )
}

export default HistorySection