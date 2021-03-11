import { useStaticQuery, graphql } from "gatsby"

export const useBuildingReqQuery = () => {
    const data = useStaticQuery(graphql`
            query BuildingReq {
        wpPage(databaseId: {eq: 776}) {
            ACF_BuildingReq {
            section1
            }
          }
        }
    `)
    return data;
}