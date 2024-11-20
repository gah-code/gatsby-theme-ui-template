// // /**
// //  * Implement Gatsby's Node APIs in this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
// //  */

// // /**
// //  * @type {import('gatsby').GatsbyNode['createPages']}
// //  */

// // const path = require("path")

// // exports.createPages = async ({ graphql, actions, reporter }) => {
// //   const { createPage } = actions

// //   // Query all MDX files in the post directory
// //   const result = await graphql(`
// //     query {
// //       allMdx(filter: { fileAbsolutePath: { regex: "/post/" } }) {
// //         nodes {
// //           id
// //           slug
// //           frontmatter {
// //             title
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   // Handle errors in the GraphQL query
// //   if (result.errors) {
// //     reporter.panicOnBuild(
// //       "Error while running GraphQL query for MDX posts.",
// //       result.errors
// //     )
// //     return
// //   }

// //   // Get the list of posts
// //   const posts = result.data.allMdx.nodes

// //   // Check if there are posts to process
// //   if (posts.length === 0) {
// //     reporter.warn("No MDX posts found in the 'post' directory.")
// //     return
// //   }

// //   // Create a page for each post
// //   posts.forEach(post => {
// //     const { id, slug } = post
// //     createPage({
// //       path: `/post/${slug}`, // URL for the post
// //       component: path.resolve(`./src/templates/post-template.jsx`), // Template for the post
// //       context: { id }, // Context passed to the template query
// //     })
// //   })

// //   reporter.info(`Successfully created ${posts.length} MDX pages.`)
// // }

// // // const path = require("path")
// // const postTemplate = path.resolve(`./src/templates/post.jsx`)

// // exports.createPages = async ({ graphql, actions, reporter }) => {
// //   const { createPage } = actions

// //   const result = await graphql(`
// //     query {
// //       allMdx(filter: { fileAbsolutePath: { regex: "/post/" } }) {
// //         nodes {
// //           id
// //           frontmatter {
// //             slug
// //           }
// //           internal {
// //             contentFilePath
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   if (result.errors) {
// //     reporter.panicOnBuild(
// //       "Error while running GraphQL query for MDX posts.",
// //       result.errors
// //     )
// //     return
// //   }

// //   const posts = result.data.allMdx.nodes

// //   posts.forEach(node => {
// //     createPage({
// //       path: `/post/${node.frontmatter.slug}`,
// //       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
// //       context: { id: node.id },
// //     })
// //   })

// //   reporter.info(`Successfully created ${posts.length} MDX pages.`)
// // }

// // exports.createPages = async ({ actions }) => {
// //   const { createPage } = actions
// //   createPage({
// //     path: "/using-dsg",
// //     component: require.resolve("./src/templates/using-dsg.js"),
// //     context: {},
// //     defer: true,
// //   })
// // }

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// const path = require("path")

// /**
//  * Create pages dynamically from MDX files in the `post` directory.
//  * This uses a custom layout and supports the MDX content file path.
//  */
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Path to the post template
//   const postTemplate = path.resolve(`./src/templates/post.jsx`)

//   // Query all MDX files in the `post` directory
//   const result = await graphql(`
//     query {
//       allMdx(filter: { fileAbsolutePath: { regex: "/post/" } }) {
//         nodes {
//           id
//           frontmatter {
//             slug
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   // Handle GraphQL query errors
//   if (result.errors) {
//     reporter.panicOnBuild(
//       "Error while running GraphQL query for MDX posts.",
//       result.errors
//     )
//     return
//   }

//   // Extract MDX posts from the query result
//   const posts = result.data.allMdx.nodes

//   // Warn if no posts are found
//   if (posts.length === 0) {
//     reporter.warn("No MDX posts found in the 'post' directory.")
//     return
//   }

//   // Create a page for each MDX post
//   posts.forEach(node => {
//     const { id, frontmatter, internal } = node

//     createPage({
//       path: `/post/${frontmatter.slug}`, // URL for the post
//       component: `${postTemplate}?__contentFilePath=${internal.contentFilePath}`, // Use MDX content file path
//       context: { id }, // Context for the template's GraphQL query
//     })
//   })

//   reporter.info(`Successfully created ${posts.length} MDX pages.`)
// }

// /**
//  * Example of creating a Deferred Static Generation (DSG) page.
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions

//   createPage({
//     path: "/using-dsg", // URL for the DSG page
//     component: require.resolve("./src/templates/using-dsg.js"), // Template for the DSG page
//     context: {}, // Additional context (if any)
//     defer: true, // Enable DSG
//   })
// }

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")

/**
 * Dynamically create pages from MDX files in the `post` directory.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX posts", result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  posts.forEach(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: { id: post.id },
    })
  })
}

/**
 * Example of creating a Deferred Static Generation (DSG) page.
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/using-dsg", // URL for the DSG page
    component: require.resolve("./src/templates/using-dsg.js"), // Template for the DSG page
    context: {}, // Additional context (if needed)
    defer: true, // Enable DSG for the page
  })
}
