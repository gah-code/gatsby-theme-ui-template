/**
 * Gatsby Configuration File
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Multi-Mode Themes `,
    description: `Seamlessly switch between color modes, experiment with different typography scales, and enjoy a unified design system that drives all your sites components.`,
    author: `@gatsbyjs`,
    twitterUsername: `@gatsbyjs`,
    siteUrl: `https://gatsby-ui-theme.netlify.app`,
    image: `/gatsby-icon.png`,
    footerLinks: [
      { name: "Home", path: "/" },
      { name: "Posts", path: "/posts" },
      { name: "About", path: "/about" },
    ],
    socialLinks: [
      { name: "GitHub", url: "https://github.com/gah-code" },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gilberto-haro-2b108222b/",
      },
      { name: "CodePen", url: "https://codepen.io/your-username" },
    ],
  },
  plugins: [
    // Theme UI plugin for styling
    "gatsby-plugin-minify-html",
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,

    // MDX plugin for handling .mdx and .md files
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gatsby-ui-theme.netlify.app`, // Ensure this matches your site's URL
        stripQueryString: true, // Optional: removes query strings from canonical URLs
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true, // Print removed selectors
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable if using Tailwind CSS
        ignore: ["/ignored.css"], // Files to ignore
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
