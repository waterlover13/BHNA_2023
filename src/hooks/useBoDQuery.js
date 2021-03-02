import { useStaticQuery, graphql } from "gatsby"

export const useBoDQuery = () => {
    const data = useStaticQuery(graphql`
        query BoDQuery {
       bod: wpPage(databaseId: {eq: 83}) {
            ACF_BoD {
            officers
            blockRepresentatives
            names {
                fullName1
                fullName2
                fullName3
                fullName4
                title2
                fullName5
                title1
                title3
                title4
                title5
            }
            }
        }
        }

    `)
    return data;
}