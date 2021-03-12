require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Bungalow Heaven Neighborhood Association`,
    description: `Bungalow Heaven is a quiet, leafy, close-knit neighborhood of historic, early 20th century bungalow homes, many built during the Arts & Crafts period`,
    author: `Demi Minjarez`,
  },
  plugins: [
    `html-react-parser`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.GATSBY_API_URL,
      
      },
    },
    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lusitana\:400,700`,
          `libre caslon text\:400,700`,
          `noto sans\:400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
