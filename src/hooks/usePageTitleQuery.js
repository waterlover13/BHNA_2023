import { useStaticQuery, graphql } from "gatsby"

export const usePageTitleQuery = () => {
    const data = useStaticQuery(graphql`
        query PageTitleQuery {
        wpPage {
            wpParent {
            node {
                ... on WpPage {
                id
                title
                wpChildren {
                    nodes {
                    ... on WpPage {
                        id
                        title
                    }
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