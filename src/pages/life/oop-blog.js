import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../../components/layout"	
import SEO from "../../components/seo"

const OOPBlogPage = ({ data }) => (
  <Layout>	
    <SEO title="OOP Blog Posts" />	
    <div>
      <Link to="/life">Back</Link>
      <h1>OOP Blog Posts</h1>
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
    allMarkdownRemark {
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
