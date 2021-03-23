import { useStaticQuery, graphql } from "gatsby"

export const useBungalowOriginsQuery = () => {
    const data = useStaticQuery(graphql`
    query BungalowOrigins {
  wpPage(databaseId: {eq: 132}) {
    uri
    ACF_BungalowOrigins {
      description
      section1
      section2
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
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}


    `)
    return data
}