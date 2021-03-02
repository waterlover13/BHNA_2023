import { useStaticQuery, graphql } from "gatsby"

export const useHomeTourQuery = () => {
    const data = useStaticQuery(graphql`
       query HomeTourQuery {
        
        wpPage(databaseId: {eq: 176}) {
            ACF_EventTour {
            tourImage {
                localFile {
                childImageSharp {
                    fluid(maxWidth: 720) {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                    }
                    gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
                }
            }
            }
        }


            }
    `)

    return data;
}






// wpPage(databaseId: {eq: 176}) {
//     ACF_EventTour {
//         tourImage {
//         localFile {
//             publicURL
//         }
//         }
//         tourImage2 {
//         localFile {
//             publicURL
//         }
//         }
//         tourHeadline
//         tourParagraph
//         tourParagraph2
//     }
//     }