// /** @jsxImportSource theme-ui */
// import React from "react"
// import { graphql, Link } from "gatsby"

// const PostsPage = ({ data }) => {
//   const posts = data.allMdx.nodes

//   return (
//     <div sx={{ padding: 4 }}>
//       <h1 sx={{ fontSize: 5, marginBottom: 4 }}>All Blog Posts</h1>
//       <ul sx={{ listStyle: "none", padding: 0 }}>
//         {posts.map(post => (
//           <li key={post.id} sx={{ marginBottom: 3 }}>
//             <h2>
//               <Link
//                 to={`/posts/${post.frontmatter.slug}`}
//                 sx={{ textDecoration: "none", color: "primary" }}
//               >
//                 {post.frontmatter.title}
//               </Link>
//             </h2>
//             <p>{post.frontmatter.excerpt}</p>
//             <p sx={{ color: "textMuted" }}>{post.frontmatter.date}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export const query = graphql`
//   query AllPosts {
//     allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//       nodes {
//         id
//         frontmatter {
//           title
//           excerpt
//           date(formatString: "MMMM DD, YYYY")
//           slug
//         }
//       }
//     }
//   }
// `

// export default PostsPage

/** @jsxImportSource theme-ui */
import React from "react"
import { graphql, Link, navigate } from "gatsby"
// import { Helmet } from "react-helmet"
import { SEO } from "../components/seo"

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes
  // const canonicalUrl = `https://www.example.com${frontmatter.slug}`

  return (
    <div sx={{ padding: 4 }}>
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
      <h1 sx={{ fontSize: 5, marginBottom: 4 }}>All Blog Posts</h1>
      <ul sx={{ listStyle: "none", padding: 0 }}>
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
    </div>
  )
}

export const Head = () => (
  <SEO
    title="Blog Posts"
    description="A list of all blog posts available on this site."
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