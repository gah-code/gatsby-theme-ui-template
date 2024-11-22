/** @jsxImportSource theme-ui */
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SEO } from "../components/seo"

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <article sx={{ padding: 4 }}>
      <h1 sx={{ fontSize: 5, marginBottom: 3 }}>{frontmatter.title}</h1>
      <p sx={{ color: "textMuted", marginBottom: 4 }}>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </article>
  )
}

export const Head = ({ data }) => {
  const { title, date } = data.mdx.frontmatter

  return (
    <SEO
      title={title}
      description={`A blog post published on ${date}.`}
      pathname={`/posts/${data.mdx.slug}`}
    />
  )
}

export const query = graphql`
  query PostById($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

export default PostTemplate
