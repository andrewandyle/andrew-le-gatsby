import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"	
import SEO from "../components/seo"

import { BlogBody } from '../styles/life/oop-blog.styles'

import OOPAvi from '../images/life/oopavi.jpg'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <BlogBody>
        <Link to="/life/oop-blog">Back</Link>
        <img src={OOPAvi} alt="OOP Avi" width={500} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogBody>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
