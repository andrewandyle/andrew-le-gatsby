import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Slideshow
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

// Styled Components
import {
  LogoContainer,
  ButtonContainer,
  DownloadResume,
  WelcomeContainer,
  PicturesContainer,
  SlideshowContainer,
  SingleSlide,
  SlideTitle,
} from '../styles/index.styles'

// Images
import Portrait from '../images/home/portrait.jpg'
import Setup from '../images/home/setup.jpg'
import Wonderspaces from '../images/home/wonderspaces.jpg'

import Logo from '../images/icons/logo.png'
import ComputerScience from '../images/icons/utcs.png'
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
    <SlideshowContainer>
      <h1>My Journey</h1>
      <Slide
        autoplay={false}
        infinite={false}
        transitionDuration={500}
        easing="ease"
      >
        <SingleSlide>
          <SlideTitle>
            <img src={ComputerScience} alt="UT Computer Science" /> The Starting Point
          </SlideTitle>
          <p>I began my Computer Science studies at my dream university, UT Austin. Due to the program's reputation as a top 10 CS program in the U.S. and being difficult to be admitted to, I grinded as hard as I could and was ecstatic to make it in!</p>
          <p>I had a very enjoyable experience while learning the fundamentals of object-oriented programming and data structures (though I had a really difficult time with the low-level material for computer architecture and operating systems). In my spare time, I searched for opportunities to create external projects, self-taught web technologies with basic tutorials, and took on an Android course from CodePath.</p>
        </SingleSlide>
        <SingleSlide>
          <SlideTitle>
            <img src={ProMazo} alt="ProMazo" /> First Internship
          </SlideTitle>
          <p>Even after the COVID pandemic, before I gave up hope on finding work, I was contacted on LinkedIn and secured my first internship at a startup named ProMazo.</p>
          <p>The company's mission is to bring out the potential in college students who needed help identifying their interests and where they want to apply their skills, so I felt like their target audience was something I was part of as well, and I felt passionate about delivering on that initiative during my time there.</p>
          <p>I worked as a full stack developer on two apps: an internal PWA that streamlines the job search, and our 100k Mentor Challenge mobile app. I was able to grow my skills tremendously when working with React, Redux, GraphQL, and AWS. This was also my first real team experience, following a Scrum workflow and planning new features each sprint.</p>
        </SingleSlide>
        <SingleSlide>
          <SlideTitle>
            <img src={EdgeLearning} alt="Edge Learning" /> Another Opportunity
          </SlideTitle>
          <p>Two of my close friends built a React/Redux SaaS from scratch for this organization, and they referred me to continue development on it!</p>
          <p>Edge Learning is a non-profit organization in Austin that supports middle and high school students that will become first-generation college students.</p>
          <p>The app I helped develop was a platform for students to track their academic progress and college readiness. Most of my work was on the frontend, wireframing and redesigning the UI of the app. We communicated frequently with executives to establish our milestones for redesign and discuss our progress.</p>
        </SingleSlide>
        <SingleSlide>
          <SlideTitle>
            <img src={Citi} alt="Citi" /> Moving Forward!
          </SlideTitle>
          <p>Finally, I got accepted for an internship opportunity at Citi for Summer 2021!</p>
          <p>I will be a Global Consumer Technology Summer Analyst at Citi's Dallas, TX office.</p>
        </SingleSlide>
      </Slide>
    </SlideshowContainer>
  </Layout>
)

export default IndexPage
