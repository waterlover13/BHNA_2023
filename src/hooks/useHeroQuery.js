import { useStaticQuery, graphql } from "gatsby" 

export const useHeroQuery = () => {
   const data = useStaticQuery(graphql`
     query HeroQuery {
        wpPage(databaseId: {eq: 39}) {
          id
          ACF_HomePage {
        heroLink
         heroImage {
          localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            fluid(maxWidth: 1920) {
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



// ACF_HomePage {
//     heroImage {
//       localFile {
//         childImageSharp {
//           sizes {
//             base64
//             tracedSVG
//             srcWebp
//             srcSetWebp
//             originalImg
//             originalName
//           }
//           gatsbyImageData(placeholder: BLURRED)
//           fluid(maxWidth: 1920) {
//             base64
//             tracedSVG
//             srcWebp
//             srcSetWebp
//             originalImg
//             originalName
//           }
//         }
//       }
//     }
//   }