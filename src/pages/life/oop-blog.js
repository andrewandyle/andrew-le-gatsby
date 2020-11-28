import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../../components/layout"	
import SEO from "../../components/seo"

const OOPBlogPage = ({ data }) => (
  <Layout>	
    <SEO title="OOP Blog Posts" />	
    <div>
      <Link to="/life">Back</Link>
      <h1>CS371p Fall 2020: Andrew Le</h1>
      <h3>This is a series of blog posts for CS371p, Object-Oriented Programming.</h3>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </div>
      ))}
    </div>	
  </Layout>	
)

export const blogQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___entry}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default OOPBlogPage
