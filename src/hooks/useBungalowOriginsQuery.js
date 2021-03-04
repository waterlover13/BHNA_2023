import { useStaticQuery, graphql } from "gatsby"

export const useBungalowOriginsQuery = () => {
    const data = useStaticQuery(graphql`
    query BungalowOrigins {
  wpPage(databaseId: {eq: 132}) {
    uri
    ACF_BungalowOrigins {
      description
      title1
      title2
      title3
      para1
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
      para14
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