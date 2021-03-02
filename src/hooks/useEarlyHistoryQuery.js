import { useStaticQuery, graphql } from "gatsby"

export const useEarlyHistoryQuery = () => {
    const data = useStaticQuery(graphql`
        query EarlyHistory {
  wpPage(databaseId: {eq: 129}) {
    ACF_EarlyHistory {
      title1
      title2
      title3
      title4
      title5
      title6
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
    }
  }
}


    `)
    return data;
}