import { useStaticQuery, graphql } from "gatsby"

export const useEarlyHistoryQuery = () => {
    const data = useStaticQuery(graphql`
        query EarlyHistory {
  wpPage(databaseId: {eq: 129}) {
    ACF_EarlyHistory {
      section1
      section2
      section3
      section4
      section5
      section6
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
      sectionImg2 {
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
    }
  }
}


    `)
    return data;
}