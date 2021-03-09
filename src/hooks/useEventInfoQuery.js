import { useStaticQuery, graphql } from "gatsby"

export const useEventInfoQuery = () => {
    const data = useStaticQuery(graphql`
        query EventInfoQuery {
            wpPage(databaseId: {eq: 176}) {
                ACF_EventTour {
                
                tourImage2 {
                    localFile {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                        fluid(maxWidth: 720) {
                        base64
                        tracedSVG
                        srcWebp
                        srcSetWebp
                        originalImg
                        originalName
                        }
                    }
                    }
                }
                tourHeadline
                sponsorHeading
                tourParagraph
                tourParagraph2
                sponsorLink2
              sponsorImg2 {
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                    fluid(maxWidth: 500) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                  }
                }
              }
              sponsorImg1 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                    gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                  }
                }
              }
            }

         }
            }

    `) 
    return data;
}