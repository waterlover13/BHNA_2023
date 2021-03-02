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
                tourParagraph
                tourParagraph2
                }
            }
            }

    `) 
    return data;
}