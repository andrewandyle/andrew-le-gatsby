import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../../components/layout"	
import SEO from "../../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

import { BlogList, BlogCard } from '../../styles/life/oop-blog.styles'

const OOPBlogPage = ({ data }) => (
  <Layout>	
    <SEO title="OOP Blog Posts" />	
    <Link id="back" to="/life">
      <FontAwesomeIcon id="icon" icon={faArrowAltCircleLeft} />
      Back
    </Link>
    <h1>CS371p Fall 2020: Andrew Le</h1>
    <h3>This is a series of blog posts for CS371p, Object-Oriented Programming.</h3>
    <BlogList>
      {data.allMarkdownRemark.edges.map((post, index) => (
        <Link to={post.node.frontmatter.path}>
          <BlogCard key={post.node.id} index={index}>
            <h3>{`Blog #${post.node.frontmatter.entry}`}</h3>
            <p>{post.node.frontmatter.week}</p>
          </BlogCard>
        </Link>
      ))}
    </BlogList>	
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
            entry
            week
          }
        }
      }
    }
  }
`

export default OOPBlogPage
