import { useStaticQuery, graphql} from "gatsby"

export const useWhatisBungalowQuery = () => {
    const data = useStaticQuery(graphql`
    query WhatBungalow {
  wpPage(databaseId: {eq: 135}) {
    ACF_WhatisBungalowHeaven {
      img1 {
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
      img2 {
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
      img3 {
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
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      para2
      para3
      para4
      para5
      para6
      para7
      para8
      para9
      para10
      para11
      para12
      para13
      para1
    }
  }
}

      
    `)
    return data
}