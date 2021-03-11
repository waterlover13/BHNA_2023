import { useStaticQuery, graphql} from "gatsby"

export const useWhatisBungalowQuery = () => {
  const data = useStaticQuery(graphql`
    query WhatBungalow {
  wpPage(databaseId: {eq: 135}) {
    ACF_WhatisBungalowHeaven {
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
  return data
}

