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
      description
      h3Question1
      h3Question2
      h3Question3
      h3Question4
      h3Question5
      h3Question6
      h3Question7
      h3Question8
      h3Question9
      h3Question10
      paragraph1
      paragraph2
      paragraph3
      paragraph4
      paragraph5
      paragraph6
      paragraph7
      paragraph8
      paragraph9
      paragraph10
      paragraph102
      paragraph103
      paragraph10Link
      paragraph10Link2
    }
  }
        }

    `)

    return data;
}