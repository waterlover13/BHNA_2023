import { useStaticQuery, graphql } from "gatsby"

export const useLandmarkQuery = () => {
    const data = useStaticQuery(graphql`
      query LandmarkQuery {
        wpPage(databaseId: {eq: 103}) {
    ACF_LandmarkFAQ {
      landmarkImage1 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
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
      landmarkImage2 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1080) {
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

      section1
      sectionImg1 {
        localFile {
          childImageSharp {
            fluid(maxWidth: 700) {
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
      description
      
      
    }
  }
        }

    `)

    return data;
}