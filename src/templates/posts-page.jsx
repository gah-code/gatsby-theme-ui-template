import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { Box, Flex, Button, Text } from "theme-ui"
import Container from "../components/Container"
import { SEO } from "../components/seo"
import Layout from "../components/layout/Layout"

const PostsPage = ({ data, pageContext }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext

  // Pagination URLs
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/posts" : `/posts/${currentPage - 1}`
  const nextPage = `/posts/${currentPage + 1}`

  return (
    <Layout>
      <Container>
        <Box sx={{ maxWidth: "800px", mx: "auto", p: [3, 4, 5] }}>
          {/* Page Title */}
          <h1 sx={{ fontSize: [5, 6], mb: 4 }}>All Blog Posts</h1>

          {/* Blog Post List */}
          <ul
            sx={{
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            {posts.map(post => (
              <li
                key={post.id}
                sx={{
                  mb: 4,
                  p: 3,
                  borderRadius: "default",
                  bg: "muted",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <h2 sx={{ fontSize: [4, 5], mb: 2 }}>
                  <Link
                    to={`/posts/${post.frontmatter.slug}`}
                    sx={{
                      textDecoration: "none",
                      color: "primary",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <Text sx={{ fontSize: 2, color: "textMuted", mb: 2 }}>
                  {post.frontmatter.date}
                </Text>
                <Text sx={{ fontSize: 2 }}>{post.frontmatter.excerpt}</Text>
              </li>
            ))}
          </ul>

          {/* Pagination Buttons */}
          <Flex sx={{ justifyContent: "space-between", mt: 4 }}>
            {!isFirst && (
              <Button
                onClick={() => navigate(prevPage)}
                sx={{ variant: "buttons.primary" }}
              >
                ← Previous
              </Button>
            )}
            {!isLast && (
              <Button
                onClick={() => navigate(nextPage)}
                sx={{ variant: "buttons.primary" }}
              >
                Next →
              </Button>
            )}
          </Flex>
        </Box>
      </Container>
    </Layout>
  )
}

export const Head = () => (
  <SEO
    title="Blog Posts | All Posts"
    description="A list of all blog posts available on this site, with Markdown and JSX combined for dynamic, responsive layouts."
    pathname="/posts"
  />
)

export const query = graphql`
  query AllPosts($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, skip: $skip, limit: $limit) {
      nodes {
        id
        frontmatter {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default PostsPage
