import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"	
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { BlogBody, ImageContainer } from '../styles/life/oop-blog.styles'

import OOPAvi from '../images/life/oopavi.jpg'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <BlogBody>
        <Link id="back" to="/life/oop-blog">
          <FontAwesomeIcon id="icon" icon={faArrowAltCircleLeft} />
          Back
        </Link>
        <ImageContainer>
          <img src={OOPAvi} alt="OOP Avi" />
        </ImageContainer>
        <h1>{`Blog #${post.frontmatter.entry} (Week of ${post.frontmatter.week})`}</h1>
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
        entry
        week
      }
    }
  }
`
