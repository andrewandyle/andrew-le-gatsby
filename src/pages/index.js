import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styled Components
import {
  MainHeader,
  LogoContainer,
  ButtonContainer,
  MarqueeContainer,
  DownloadResume,
  AboutMe,
  SingleSkill,
  TimelineContainer,
  TimelineLink,
  SkillBubbles,
  Skill,
  LinksContainer,
  SectionsContainer,
  SectionCard,
} from '../styles/index.styles'

// Images
import Avatar from '../images/icons/avatar.png'
import Logo from '../images/icons/logo.png'
import Email from '../images/icons/email.png'
import LinkedIn from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.jpg'
import Main from '../images/main.jpeg'

// Marquee
import Marquee from 'react-fast-marquee'

// Arrows for Marquee
import Arrow from '../images/icons/arrow.gif'
import ArrowSlow from '../images/icons/arrow-slow.gif'
import ArrowBlue from '../images/icons/arrow-blue.gif'

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Icons for Skills
import Java from '../images/experience/icons/java.svg'
import Python from '../images/experience/icons/python.svg'
import CPP from '../images/experience/icons/cpp.svg'
import JavaScript from '../images/experience/icons/javascript.svg'
import Swift from '../images/experience/icons/swift.svg'
import ReactIcon from '../images/experience/icons/react.svg'
import Angular from '../images/experience/icons/angular.svg'
import GraphQL from '../images/experience/icons/graphql.svg'
import AWS from '../images/experience/icons/aws.svg'
import MySQL from '../images/experience/icons/mysql.svg'

// Icons for Timeline
import UTAustin from '../images/experience/logos/utaustin.png'
import ProMazo from '../images/experience/logos/promazo.png'
import EdgeLearning from '../images/experience/logos/edgelearning.png'
import Citi from '../images/experience/logos/citi.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeader>
      <MarqueeContainer>
        <Marquee gradientColor={[24, 24, 24]} speed={150} style={{ height: 50 }}>
          <img src={ArrowBlue} alt="Arrow" style={{ maxWidth: 50, maxHeight: 50 }} />
        </Marquee>
        <Marquee gradientColor={[24, 24, 24]} speed={100} style={{ marginTop: 30, height: 100 }}>
          <img src={Arrow} alt="Arrow" style={{ maxWidth: 100, maxHeight: 100 }} />
        </Marquee>
        <Marquee gradientColor={[24, 24, 24]} speed={75} style={{ marginTop: 20, height: 75 }}>
          <img src={Arrow} alt="Arrow" style={{ maxWidth: 75, maxHeight: 75 }} />
        </Marquee>
        <Marquee gradientColor={[24, 24, 24]} speed={125} style={{ marginTop: 40, height: 60 }}>
          <img src={ArrowBlue} alt="Arrow" style={{ maxWidth: 60, maxHeight: 60 }} />
        </Marquee>
        <Marquee gradientColor={[24, 24, 24]} speed={60} style={{ marginTop: 30, height: 125 }}>
          <img src={ArrowSlow} alt="Arrow" style={{ maxWidth: 125, maxHeight: 125 }} />
        </Marquee>
      </MarqueeContainer>
      <LogoContainer>
        <img id="avatar" src={Avatar} alt="Avatar" />
        <img id="logo" src={Logo} alt="Logo" />
      </LogoContainer>
      <ButtonContainer>
        <DownloadResume
          rel="noopener noreferrer"
          href="/AndrewLe-Resume.pdf"
          target="_blank"
        >
          DOWNLOAD RESUME
        </DownloadResume>
        <div>
          <a href="mailto:andrewandyle@gmail.com" target="_blank" rel="noreferrer">
            <img src={Email} height={50} alt="Email" />
          </a>
          <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} height={50} alt="LinkedIn" />
          </a>
          <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
            <img src={GitHub} height={50} alt="GitHub" />
          </a>
        </div>
      </ButtonContainer>
    </MainHeader>
    <AboutMe>
      <img id="main" src={Main} alt="Main" />
      <div>
        <h1>A little about me...</h1>
        <p>
          Hello! I'm Andrew Le, a Software Engineer at Citi, and Computer Science
          graduate from The University of Texas at Austin. I graduated in December 2021, 
          and I currently reside in Dallas, TX for my job.
        </p>
        <p>
          I enjoy designing and developing full-stack applications. I have built web apps
          using JavaScript, React, and Angular for projects and startups. My career goals
          include delivering software products to fit clients' needs, and expanding my
          technical knowledge into other applications of CS.
        </p>
        <p>
          I have a passion for dance games! I am a competitive Dance Dance Revolution (DDR)
          player. I started playing in August 2021 and have been improving quickly since.
          You can view my progress on <a href="https://www.youtube.com/channel/UCU7PqJ_WJX5LHLv-npuNZGg" target="_blank" rel="noreferrer">YouTube</a>!
        </p>
      </div>
    </AboutMe>

    <h1 style={{ marginTop: 50 }}>My Skillset</h1>
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
        <img src={Angular} alt="Angular" /> Angular
      </SingleSkill>
      <SingleSkill delay={8}>
        <img src={GraphQL} alt="GraphQL" /> GraphQL
      </SingleSkill>
      <SingleSkill delay={9}>
        <img src={AWS} alt="AWS" /> AWS
      </SingleSkill>
      <SingleSkill delay={10}>
        <img src={MySQL} alt="MySQL" /> MySQL
      </SingleSkill>
    </Marquee>

    <h1 style={{ marginTop: 50 }}>My Journey</h1>
    <TimelineContainer>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #bf5700' }}
          date="Fall 2018 - Fall 2021"
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
          date="June 2021 - Present"
          icon={<img id="citi" src={Citi} alt="Citi" width={50} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #00529b, #10c0f2)' }}
        >
          <SkillBubbles>
            <Skill>Angular</Skill>
          </SkillBubbles>
          <h3>Global Consumer Technology Analyst</h3>
          <h4>Citi</h4>
          <LinksContainer color="blue">
            <TimelineLink href="https://www.citi.com/" target="_blank" rel="noreferrer">MAIN WEBSITE</TimelineLink>
          </LinksContainer>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>

    <h1 style={{ marginTop: 50 }}>Other Stuff</h1>
    <SectionsContainer>
      <Link to="/austin-food">
        <SectionCard color="pinkYellow" delay={3}>
          <h3>Austin Food Favorites</h3>
          <p>My recommendations for restaurants to try in Austin.</p>
        </SectionCard>
      </Link>
    </SectionsContainer>
  </Layout>
)

export default IndexPage
