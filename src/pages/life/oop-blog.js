import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../../components/layout"	
import SEO from "../../components/seo"

import { BlogList, BlogCard } from '../../styles/life/oop-blog.styles'

const OOPBlogPage = ({ data }) => (
  <Layout back="/life">	
    <SEO title="OOP Blog Posts" />	
    <h1>CS371p Fall 2020: Andrew Le</h1>
    <h3>This is a series of blog posts for Object-Oriented Programming.</h3>
    <p>Object-Oriented Programming in UTCS (CS371p) is taught by Professor Glenn Downing.
      It teaches object-oriented features and principles in C++, a lot of which are compared and
      contrasted to Java. This class consisted of pair-programming projects, HackerRank exams
      that have a collaborative part, papers that teach OOP principles which we annotate, and
      blog entries that we post such as below.
    </p>
    <p>I would easily recommend this class to any of my peers at UTCS. Downing is one of the
      best professors I've had, he knows how to keep his classes engaging even when online.
      His classes are known for his cold calling, but he makes sure students understand the
      concepts and his lectures are crystal clear. I will take his Software Engineering class
      (CS373) next semester.
    </p>
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
