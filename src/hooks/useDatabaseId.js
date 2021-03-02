import { useStaticQuery, graphql } from "gatsby" 

export const useDatabaseId = () => {
    const data = useStaticQuery(graphql`
        query DatabaseId {
        wpPage(databaseId: {eq: 176}) {
          uri
          slug
        }
      }
 
    `)
    return data
}

 {/* { id===176 && <HomeTourCover /> }  */}