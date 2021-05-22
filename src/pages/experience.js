import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"	
import SEO from "../components/seo"

// Marquee
import Marquee from 'react-fast-marquee'

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import {
  SingleSkill,
  TimelineContainer,
  SkillBubbles,
  Skill,
  LinksContainer,
  TimelineLink,
} from '../styles/experience.styles'

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

// Icons for Timeline
import UTAustin from '../images/experience/logos/utaustin.png'
import ProMazo from '../images/experience/logos/promazo.png'
import EdgeLearning from '../images/experience/logos/edgelearning.png'
import Citi from '../images/experience/logos/citi.png'

const ExperiencePage = () => (
  <Layout back="/">	
    <SEO title="Experience" />
    <h1>Skills</h1>
    <Marquee gradientColor={[18, 18, 18]} speed={50}>
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
    </Marquee>

    <h1 style={{ marginTop: 50 }}>My Journey</h1>
    <TimelineContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #bf5700' }}
          date="Fall 2018"
          icon={<img src={UTAustin} alt="UT Austin" />}
        >
          <h3>B.S. in Computer Science</h3>
          <h4>The University of Texas at Austin</h4>
          <h4><strong>Graduation:</strong> December 2021</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #38d4d1' }}
          date="April 2020 - May 2021"
          icon={<img id="promazo" src={ProMazo} alt="ProMazo" width={30} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #38d4d1, #59cd89)' }}
        >
          <SkillBubbles>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>GraphQL</Skill>
            <Skill>AWS</Skill>
          </SkillBubbles>
          <h3>Full Stack Engineer</h3>
          <h4>ProMazo</h4>
          <LinksContainer color="pmGreen">
            <TimelineLink href="https://promazo.com/" target="_blank" rel="noreferrer">MAIN WEBSITE</TimelineLink>
            <TimelineLink href="https://mimino.promazo.com/" target="_blank" rel="noreferrer">MIMINO</TimelineLink>
            <TimelineLink href="https://mentors.promazo.com/" target="_blank" rel="noreferrer">100KM</TimelineLink>
          </LinksContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #80d0e9' }}
          date="August 2020 - January 2021"
          icon={<img src={EdgeLearning} alt="Edge Learning" />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(315deg, #bdcad9 0%, #e1dada 74%)' }}
        >
          <SkillBubbles>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
          </SkillBubbles>
          <h3>Frontend Engineer</h3>
          <h4>Edge Learning</h4>
          <LinksContainer color="blue">
            <TimelineLink href="https://edgelearning.org/" target="_blank" rel="noreferrer">MAIN WEBSITE</TimelineLink>
          </LinksContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #10c0f2' }}
          date="June 2021"
          icon={<img id="citi" src={Citi} alt="Citi" width={50} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #00529b, #10c0f2)' }}
        >
          <h3>Global Consumer Technology Summer Analyst</h3>
          <h4>Citibank</h4>
          <h4>Incoming Intern for Summer 2021</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>

    {/* <h1>Collections</h1>
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
    </SectionsContainer> */}
  </Layout>	
)	

export default ExperiencePage
