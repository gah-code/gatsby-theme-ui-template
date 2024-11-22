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
    const slug = createFilePath({ node, getNode, basePath: "posts" })
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
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
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

  posts.forEach(post => {
    createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: `${path.resolve(
        "./src/templates/post.jsx"
      )}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    })
  })
  // const result = await graphql(`
  //   query {
  //     allMdx {
  //       nodes {
  //         id
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (result.errors) {
  //   reporter.panicOnBuild("Error loading MDX posts", result.errors)
  //   return
  // }

  // const posts = result.data.allMdx.nodes
  // const postTemplate = path.resolve("./src/templates/post.jsx")

  // posts.forEach(post => {
  //   createPage({
  //     path: `/posts${post.fields.slug}`,
  //     component: postTemplate,
  //     context: { id: post.id },
  //   })
  // })
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
