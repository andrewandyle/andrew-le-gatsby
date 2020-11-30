import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"	
import SEO from "../components/seo"

import { SkillsContainer, SingleSkill, SectionsContainer, SectionCard } from '../styles/experience.styles'

// Icons for Skills
import Java from '../images/experience/icons/java.svg'
import Python from '../images/experience/icons/python.svg'
import CPP from '../images/experience/icons/cpp.svg'
import JavaScript from '../images/experience/icons/javascript.svg'
import Swift from '../images/experience/icons/swift.svg'
import ReactIcon from '../images/experience/icons/react.svg'
import GraphQL from '../images/experience/icons/graphql.svg'
import AWS from '../images/experience/icons/aws.svg'
import MySQL from '../images/experience/icons/mysql.svg'
import Django from '../images/experience/icons/django.svg'

// Icons for Collections
import ProMazo from '../images/icons/promazo.png'

const ExperiencePage = () => (
  <Layout back="/">	
    <SEO title="Experience" />
    <h1>Skills</h1>
    <SkillsContainer>
      <SingleSkill delay={1}>
        <img src={Java} alt="Java" /> Java
      </SingleSkill>
      <SingleSkill delay={2}>
        <img src={Python} alt="Python" /> Python
      </SingleSkill>
      <SingleSkill delay={3}>
        <img src={CPP} alt="C++" /> C++
      </SingleSkill>
      <SingleSkill delay={4}>
        <img src={JavaScript} alt="JavaScript" /> JavaScript
      </SingleSkill>
      <SingleSkill delay={5}>
        <img src={Swift} alt="Swift" /> Swift
      </SingleSkill>
      <SingleSkill delay={6}>
        <img src={ReactIcon} alt="React" /> React
      </SingleSkill>
      <SingleSkill delay={7}>
        <img src={GraphQL} alt="GraphQL" /> GraphQL
      </SingleSkill>
      <SingleSkill delay={8}>
        <img src={AWS} alt="AWS" /> AWS
      </SingleSkill>
      <SingleSkill delay={9}>
        <img src={MySQL} alt="MySQL" /> MySQL
      </SingleSkill>
      <SingleSkill delay={10}>
        <img src={Django} alt="Django" /> Django
      </SingleSkill>
    </SkillsContainer>

    <h1>Collections</h1>
    <SectionsContainer>
      <Link to="/experience/promazo">
        <SectionCard color="pmGreen" delay={3}>
          <div>
            <img src={ProMazo} alt="ProMazo" width={20} />
            <h3>ProMazo Overview</h3>
          </div>
          <p>An overview of my experience and contributions to ProMazo.</p>
        </SectionCard>
      </Link>
    </SectionsContainer>
  </Layout>	
)	

export default ExperiencePage
