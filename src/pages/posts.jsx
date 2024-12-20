/** @jsxImportSource theme-ui */
import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { Box } from "theme-ui"
import Container from "../components/Container"
// import { Helmet } from "react-helmet"
import { SEO } from "../components/seo"
import Layout from "../components/layout/Layout"

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes
  // const canonicalUrl = `https://www.example.com${frontmatter.slug}`

  return (
    <Layout>
      <Container>
        <Box sx={{ maxWidth: "800px", mx: "auto", p: [3, 4, 5] }}>
          <h1 sx={{ fontSize: 5, marginBottom: 4 }}>All Blog Posts</h1>
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              // px: 3,
              // py: 4,
            }}
          >
            {posts.map(post => (
              <li key={post.id} sx={{ marginBottom: 3 }}>
                <h2>
                  <Link
                    to={`/posts/${post.frontmatter.slug}`}
                    sx={{ textDecoration: "none", color: "primary" }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p>{post.frontmatter.excerpt}</p>
                <p sx={{ color: "textMuted" }}>{post.frontmatter.date}</p>
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate(-1)} // Navigate to the previous page
            sx={{
              marginBottom: 4,
              padding: 2,
              backgroundColor: "muted",
              color: "primary",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "primary",
                color: "background",
              },
            }}
          >
            ← Back
          </button>
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Blog Posts | All Posts"
    description="A list of all blog posts available on this site, combined with Markdown and JSX to create rich, interactive pages with built-in code syntax highlighting from Theme UI presets."
    pathname="/posts"
  />
)

export const query = graphql`
  query AllPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
`

export default PostsPage
