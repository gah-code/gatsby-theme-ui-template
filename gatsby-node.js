// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "posts" }).replace(
      /^\/|\/$/g,
      ""
    )
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX posts", result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  // Create individual post pages
  posts.forEach(post => {
    createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: path.resolve("./src/templates/post.jsx"),
      context: { id: post.id },
    })
  })

  // Pagination settings
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/posts-page.jsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

// const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "Mdx") {
//     const slug = createFilePath({ node, getNode, basePath: "posts" })
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMdx {
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

//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX posts", result.errors)
//     return
//   }

//   const posts = result.data.allMdx.nodes

//   posts.forEach(post => {
//     createPage({
//       path: `/posts/${post.frontmatter.slug}`,
//       component: `${path.resolve(
//         "./src/templates/post.jsx"
//       )}?__contentFilePath=${post.internal.contentFilePath}`,
//       context: { id: post.id },
//     })
//   })
// }
// gatsby-node.js
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/grid-variants",
    component: require.resolve("./src/pages/GridVariantsPage.jsx"),
  })
}

/**
 * Example of creating a Deferred Static Generation (DSG) page.
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions

//   createPage({
//     path: "/using-dsg", // URL for the DSG page
//     component: require.resolve("./src/templates/using-dsg.js"), // Template for the DSG page
//     context: {}, // Additional context (if needed)
//     defer: true, // Enable DSG for the page
//   })
// }
