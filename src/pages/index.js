import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

// Styled Components
import {
  LogoContainer,
  ButtonContainer,
  DownloadResume,
  WelcomeContainer,
  PicturesContainer,
  TimelineContainer,
  SkillsContainer,
  Skill,
  LinksContainer,
  TimelineLink,
} from '../styles/index.styles'

// Images
import Portrait from '../images/home/portrait.jpg'
import Setup from '../images/home/setup.jpg'
import Wonderspaces from '../images/home/wonderspaces.jpg'

import Logo from '../images/icons/logo.png'
import UTAustin from '../images/icons/utaustin.png'
import ProMazo from '../images/icons/promazo.png'
import EdgeLearning from '../images/icons/edgelearning.png'
import Citi from '../images/icons/citi.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Andrew Le" />
    <LogoContainer>
      <img src={Logo} width={800} alt="Logo" />
    </LogoContainer>
    <ButtonContainer>
      <DownloadResume
        rel="noopener noreferrer"
        href="/AndrewLe-Resume.pdf"
        target="_blank"
      >
        DOWNLOAD RESUME
      </DownloadResume>
    </ButtonContainer>
    <WelcomeContainer>
      <PicturesContainer>
        <img id="left" src={Portrait} alt="Portrait" />
        <img id="middle" src={Setup} alt="Setup" />
        <img id="right" src={Wonderspaces} alt="Wonderspaces" />
      </PicturesContainer>
      <h1>Welcome!</h1>
      <p>I'm a senior Computer Science student at UT Austin. As a growing software engineer, my passion lies in delivering software products to help clients in need, being an effective team player, and developing my expertise to better reach those goals. Envisioning the impact my work has on my target audience is what drives me!</p>
      <p>Aside from my hours of sitting at my PC programming, gaming, and watching anime, I try to go outdoors often to relieve the isolation caused by quarantine. I love going around Austin to bike downtown, find new nature spots, and scratch restaurants off my bucket list. I'm a big fan of Persona and listen to a lot of Future Funk.</p>
    </WelcomeContainer>
    <TimelineContainer>
      <h1>My Journey</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #bf5700' }}
          date="Fall 2018"
          icon={<img src={UTAustin} alt="UT Austin" />}
        >
          <h3>Admitted to UT Austin's Computer Science Program!</h3>
          <h4><strong>Expected Graduation:</strong> December 2021</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #38d4d1' }}
          date="April 2020 - Present"
          icon={<img src={ProMazo} alt="ProMazo" width={30} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #38d4d1, #59cd89)' }}
        >
          <SkillsContainer>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>GraphQL</Skill>
            <Skill>AWS</Skill>
          </SkillsContainer>
          <h3>Full Stack Engineer</h3>
          <h4>ProMazo</h4>
          <LinksContainer color="pmGreen">
            <TimelineLink href="https://promazo.com/" target="_blank" rel="noreferrer">MAIN WEBSITE</TimelineLink>
            <TimelineLink href="https://app.promazo.com/" target="_blank" rel="noreferrer">INTERNAL PWA</TimelineLink>
            <TimelineLink href="http://100kmentors.org/" target="_blank" rel="noreferrer">100KM WEBSITE</TimelineLink>
            <TimelineLink href="https://apps.apple.com/us/app/100k-mentor-challenge/id1528816720" target="_blank" rel="noreferrer">100KM APP</TimelineLink>
          </LinksContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #80d0e9' }}
          date="August 2020 - Present"
          icon={<img src={EdgeLearning} alt="Edge Learning" />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(315deg, #bdcad9 0%, #e1dada 74%)' }}
        >
          <SkillsContainer>
            <Skill>React</Skill>
            <Skill>Redux</Skill>
          </SkillsContainer>
          <h3>Frontend Engineer</h3>
          <h4>Edge Learning</h4>
          <LinksContainer color="blue">
            <TimelineLink href="https://edgelearning.org/" target="_blank" rel="noreferrer">MAIN WEBSITE</TimelineLink>
          </LinksContainer>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ borderTop: 'solid 4px #10c0f2' }}
          date="November 2020"
          icon={<img src={Citi} alt="Citi" width={50} />}
          iconStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #00529b, #10c0f2)' }}
        >
          <h3>Accepted an offer from Citi!</h3>
          <h4><strong>Internship Position:</strong> Global Consumer Technology Summer Analyst</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </TimelineContainer>
  </Layout>
)

export default IndexPage
