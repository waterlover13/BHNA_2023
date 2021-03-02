import { useStaticQuery, graphql } from "gatsby"

export const useSupportQuery = () => {
    const data = useStaticQuery(graphql`
        query SupportQuery {
            support: wpPage(databaseId: {eq: 39}) {
                ACF_HomePage {
                membershipLink
                supportBungalowLink
                volunteerLink
                }
            }
            }

    `)

    return data;
}