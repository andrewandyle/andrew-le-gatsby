import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { BlogList, BlogCard } from "../../styles/life/blog.styles"

const SWEBlogPage = ({ data }) => (
  <Layout back="/life">
    <SEO title="SWE Blog Posts" />
    <h1>CS373 Spring 2021: Andrew Le</h1>
    <h3>This is a series of blog posts for Software Engineering.</h3>
    <p>
      Software Engineering in UTCS (CS373) is taught by Professor Glenn Downing.
      It teaches the funadmentals of software engineering as well as languages,
      practices and tools used in this field. This class consists of group
      projects for building a dynamic website with an API and backend,
      collaborative HackerRank exercises, and blog entries that we post such as
      below.
    </p>
    <BlogList>
      {data.allMarkdownRemark.edges.map(
        (post, index) =>
          post.node.frontmatter.class === "swe" && (
            <Link key={post.node.id} to={post.node.frontmatter.path}>
              <BlogCard key={post.node.id} index={index} color="darkBlue">
                <h3>
                  {post.node.frontmatter.entry === 14
                    ? "Final Entry"
                    : `Blog #${post.node.frontmatter.entry}`}
                </h3>
                <p>{post.node.frontmatter.week}</p>
              </BlogCard>
            </Link>
          )
      )}
    </BlogList>
  </Layout>
)

export const blogQuery = graphql`
  query SweBlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___entry }) {
      edges {
        node {
          id
          frontmatter {
            path
            entry
            week
            class
          }
        }
      }
    }
  }
`

export default SWEBlogPage
