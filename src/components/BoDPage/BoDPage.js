import React from "react"
import { Wrapper } from "./BoDPage.styles"

import { useBoDQuery } from "../../hooks/useBoDQuery"

const BoDPage = () => {
    // const { 
    //     wpPage: { AFC_BoD: data }
    //  } = useBoDQuery();

    const { bod } = useBoDQuery();
     console.log(bod, "hey")
  return (
      <Wrapper>
          <h1>{bod.ACF_BoD.blockRepresentatives}</h1>
      </Wrapper>
  )
}

export default BoDPage