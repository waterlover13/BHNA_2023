import React from 'react'
import { getImage } from "gatsby-plugin-image"
import { useHomeTourQuery } from "../../hooks/useHomeTourQuery"
import { Wrapper, StyledImg, TourDetails, Seperator } from "./HomeTourCover.styles"


const HomeTourCover = () => {
    
    const {
        wpPage: { ACF_EventTour: data },
    } = useHomeTourQuery();
    console.log(data)

    const imgData = getImage(data.tourImage.localFile);
    

    return (
        <Wrapper>
            
          
           <TourDetails className="about-text">
            <h2>31st Bungalow Heaven Home Tour</h2>  
            <Seperator />
            <div>
                <p className="tour__headline">As Seen Through A Lens</p>
                <p className="tour__sub-headline">Historic Homes & Artisan Demonstrations</p>
            </div>
            <Seperator />
            <div>
                <p className="tour__online">Join us online</p>
                <p className="tour__info"> <b>April 22-28, 2021</b> | Tickets now Available on Eventbrite</p>
                <a href="https://www.eventbrite.com/e/31st-bungalow-heaven-home-tour-as-seen-through-a-lens-tickets-142046383557" rel="noopener noreferrer" target="_blank">
                    <button>
                        Buy Tickets
                    </button>
                </a>
            </div>


            </TourDetails>

            
           <StyledImg image={imgData} alt="HomeTour" />
           
        </Wrapper>
    )
}

export default HomeTourCover
