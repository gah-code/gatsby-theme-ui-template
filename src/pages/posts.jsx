/** @jsxImportSource theme-ui */
import React from "react"
import { graphql, Link, navigate } from "gatsby"
import { Box, Flex, Text, Button } from "theme-ui"
import Container from "../components/Container"
import { SEO } from "../components/seo"
import Layout from "../components/layout/Layout"

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <Container>
        <Flex sx={{ flexDirection: ["column", "row"], gap: 4 }}>
          {/* Sidebar */}
          <Box
            sx={{
              flex: ["1 1 auto", "1 0 350px"], // Sidebar responsive width
              mt: 4,
              p: 2,
              bg: "muted",
              borderRadius: "default",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* <Text as="h2" sx={{ fontSize: 4, mb: 3 }}>
              Blog Posts
            </Text> */}
            <ul sx={{ listStyle: "none", p: 0, m: 0 }}>
              {posts.map(post => (
                <Box
                  as="li"
                  key={post.id}
                  sx={{
                    mb: 3,
                    p: 3,
                    borderRadius: "default",
                    // bg: "background",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    transition: "box-shadow 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Link
                    to={`/posts/${post.frontmatter.slug}`}
                    sx={{
                      textDecoration: "none",
                      color: "primary",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <Text as="h3" sx={{ fontSize: 3, mb: 2 }}>
                      {post.frontmatter.title}
                    </Text>
                  </Link>
                  <Text sx={{ fontSize: 2, mb: 2, color: "textMuted" }}>
                    {post.frontmatter.date}
                  </Text>
                  <Text sx={{ fontSize: 2 }}>{post.frontmatter.excerpt}</Text>
                </Box>
              ))}
            </ul>
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              flex: ["1 1 auto", "3 1 600px"],
              p: 3,
              borderRadius: "default",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Text as="h1" sx={{ fontSize: 5, mb: 2 }}>
              Welcome to the Blog
            </Text>
            <Text sx={{ fontSize: 2, mb: 3 }}>
              Explore our latest posts and topics of interest. Use the sidebar
              to navigate through blog categories and tags.
            </Text>
            <Box
              sx={{
                mt: 4,
                p: 3,
                borderRadius: "default",
                bg: "muted",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Text as="h2" sx={{ fontSize: 4, mb: 3 }}>
                Tags Placeholder
              </Text>
              <Text sx={{ fontSize: 2 }}>
                Add dynamic tags and category filters here.
              </Text>
            </Box>
          </Box>
        </Flex>

        {/* Back Button */}
        <Flex sx={{ mt: 4, justifyContent: "center" }}>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              variant: "buttons.secondary",
              cursor: "pointer",
              "&:hover": { bg: "primary", color: "background" },
            }}
          >
            ← Back
          </Button>
        </Flex>
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
