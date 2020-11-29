import React from "react"	
import { Link } from "gatsby"	

import Layout from "../components/layout"	
import SEO from "../components/seo"	

import { SectionsContainer, SectionCard } from '../styles/life.styles'

const LifePage = () => (
  <Layout back="/">	
    <SEO title="Life" />
    <h1>Collections</h1>
    <SectionsContainer>
      <Link to="/life/oop-blog">
        <SectionCard color="purple" delay={3}>
          <h3>OOP Blog Posts</h3>
          <p>A series of blog posts from CS371p, Object-Oriented Programming.</p>
        </SectionCard>
      </Link>
    </SectionsContainer>
  </Layout>	
)	

export default LifePage
