import React from "react"
import HistoryCTA from "../HistoryCTA/HistoryCTA"
import HistoryAboutCTA from "../HistoryAboutCTA/HistoryAboutCTA"

import { HistoryWrapper, HistoryCTAWrapper } from "./HistorySection.styles"

const HistorySection = () => {

    return(
        <HistoryWrapper>
        
        <div>
        <HistoryAboutCTA />
        </div>

        <HistoryCTAWrapper>
        <h2>Our History</h2>
        <HistoryCTA />
        </HistoryCTAWrapper>
        </HistoryWrapper> 
    )
}

export default HistorySection