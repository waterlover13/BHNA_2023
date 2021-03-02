import React from 'react'
import { Link } from "gatsby"

import { useSupportQuery } from "../../hooks/useSupportQuery"

import { JoinWrapper, Content, BTN, innerBTNWrapper  } from "./JoinBHNA.styles"


const JoinBHNA = ({ link }) => {
    const { support } = useSupportQuery();
    console.log(support, "support")
    return (
        <JoinWrapper>
            <Content>
            <h2>Support BHNA!</h2>
          
            <p>The Bungalow Heaven Neighborhood Association is a voice for our neighborhood in the City of Pasadena.  Please help continue this work by joining or renewing your membership in the Association.</p>
           
           <innerBTNWrapper>
           <BTN>
            <a 
            className="support-btn" 
            href={support.ACF_HomePage.membershipLink}  
            target="_blank" rel="noopener noreferrer">
                Membership 
            </a>
            </BTN>

           <BTN>
            <a 
            className="support-btn" 
            href={support.ACF_HomePage.membershipLink}  
            target="_blank" rel="noopener noreferrer">
                Volunteer 
            </a>
            </BTN>

           <BTN>
            <a 
            className="support-btn" 
            href={support.ACF_HomePage.membershipLink}  
            target="_blank" rel="noopener noreferrer">
                Support Today 
            </a>
            </BTN>
            </innerBTNWrapper>
            </Content>
        </JoinWrapper>
    )
}

export default JoinBHNA
