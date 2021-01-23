import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { BlogBody, ImageContainer } from "../styles/life/blog.styles"

import OOPAvi from "../images/life/oopavi.jpg"
import SWEAvi from "../images/life/sweavi.jpg"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout back={`/life/${post.frontmatter.class}`}>
      <SEO
        title={
          post.frontmatter.entry === 14
            ? "Final Entry"
            : `${post.frontmatter.class.toUpperCase()} Blog #${
                post.frontmatter.entry
              }`
        }
      />
      <BlogBody>
        <ImageContainer>
          <img
            src={post.frontmatter.class === "oop" ? OOPAvi : SWEAvi}
            alt="Avatar"
          />
        </ImageContainer>
        <h1>
          {post.frontmatter.class === "oop"
            ? "CS371p Fall 2020: "
            : "CS373 Spring 2021: "}{" "}
          Andrew Le
        </h1>
        <h2>
          {post.frontmatter.entry === 14
            ? "Final Entry"
            : `Blog #${post.frontmatter.entry} (Week of ${post.frontmatter.week})`}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogBody>
    </Layout>
  )
}

export const postQuery = graphql`
  query OopBlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        entry
        week
        class
      }
    }
  }
`
