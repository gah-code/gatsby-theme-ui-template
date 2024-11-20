// // /**
// //  * Configure your Gatsby site with this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
// //  */

// // /**
// //  * @type {import('gatsby').GatsbyConfig}
// //  */
// // module.exports = {
// //   siteMetadata: {
// //     title: `Gatsby Default Starter`,
// //     description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
// //     author: `@gatsbyjs`,
// //     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
// //   },
// //   plugins: [
// //     `gatsby-plugin-theme-ui`, // Enables Theme UI
// //     `gatsby-plugin-image`,
// //     {
// //       resolve: `gatsby-source-filesystem`,
// //       options: {
// //         name: `images`,
// //         path: `${__dirname}/src/images`,
// //       },
// //     },

// //     `gatsby-transformer-sharp`,
// //     `gatsby-plugin-sharp`,
// //     {
// //       resolve: `gatsby-plugin-manifest`,
// //       options: {
// //         name: `gatsby-starter-default`,
// //         short_name: `starter`,
// //         start_url: `/`,
// //         background_color: `#663399`,
// //         // This will impact how browsers show your PWA/website
// //         // https://css-tricks.com/meta-theme-color-and-trickery/
// //         // theme_color: `#663399`,
// //         display: `minimal-ui`,
// //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
// //       },
// //     },
// //   ],
// // }

// // module.exports = {
// //   siteMetadata: {
// //     title: `Gatsby Theme UI Starter`,
// //     description: `Kick off your next, great Gatsby project with this default starter.`,
// //     author: `@gatsbyjs`,
// //     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
// //   },
// //   plugins: [
// //     `gatsby-plugin-theme-ui`,
// //     {
// //       resolve: `gatsby-plugin-mdx`,
// //       options: {
// //         extensions: [`.mdx`, `.md`],
// //         defaultLayouts: {
// //           post: require.resolve(`./src/templates/post-template.jsx`), // Use a custom layout for MDX posts
// //         },
// //       },
// //     },
// //     `gatsby-plugin-image`,
// //     {
// //       resolve: `gatsby-source-filesystem`,
// //       options: {
// //         name: `post`,
// //         path: `${__dirname}/src/pages/post`,
// //       },
// //     },
// //     `gatsby-transformer-sharp`,
// //     `gatsby-plugin-sharp`,
// //     {
// //       resolve: `gatsby-plugin-manifest`,
// //       options: {
// //         name: `gatsby-starter-default`,
// //         short_name: `starter`,
// //         start_url: `/`,
// //         background_color: `#663399`,
// //         display: `minimal-ui`,
// //         icon: `src/images/gatsby-icon.png`,
// //       },
// //     },
// //   ],
// // }

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby Theme UI Starter`,
//     description: `Kick off your next, great Gatsby project with this default starter.`,
//     author: `@gatsbyjs`,
//     siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   },
//   plugins: [
//     // Theme UI plugin for styling
//     `gatsby-plugin-theme-ui`,

//     // MDX plugin for handling .mdx and .md files
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {
//         extensions: [`.mdx`, `.md`],
//         defaultLayouts: {
//           post: require.resolve(`./src/templates/post.jsx`), // Custom layout for MDX posts
//         },
//       },
//     },

//     // Filesystem source for posts
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `post`,
//         path: `${__dirname}/src/pages/post`, // Source the `post` directory for MDX files
//       },
//     },

//     // Gatsby Image and Sharp plugins for image optimization
//     `gatsby-plugin-image`,
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,

//     // Manifest plugin for PWA settings
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // Path to site icon
//       },
//     },
//   ],
// }

/**
 * Gatsby Configuration File
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Theme UI Starter`,
    description: `Kick off your next, great Gatsby project with this default starter.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // Theme UI plugin for styling
    `gatsby-plugin-theme-ui`,

    // MDX plugin for handling .mdx and .md files
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          post: require.resolve(`./src/templates/post.jsx`), // Custom layout for MDX posts
        },
      },
    },

    // Source posts from the `post` directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/pages/posts`, // Path to your MDX files
      },
    },
    `gatsby-plugin-mdx`,
    // Source images from the `images` directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Plugins for image optimization
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Manifest plugin for PWA configuration
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Path to site icon
      },
    },
  ],
}
