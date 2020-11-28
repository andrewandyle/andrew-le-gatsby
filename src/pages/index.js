import React from "react"
import { Link } from "gatsby"
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { LogoContainer, WelcomeContainer, PicturesContainer, SlideshowContainer, SingleSlide } from '../styles/Home.styles'

import Portrait from '../images/home/portrait.jpg'
import Setup from '../images/home/setup.jpg'
import Wonderspaces from '../images/home/wonderspaces.jpg'

import Logo from '../images/icons/logo.png'
import ComputerScience from '../images/icons/utcs.png'
import ProMazo from '../images/icons/promazo.png'
import EdgeLearning from '../images/icons/edgelearning.png'
import Citi from '../images/icons/citi.png'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LogoContainer>
      <img src={Logo} width={800} />
    </LogoContainer>
    <WelcomeContainer>
      <PicturesContainer>
        <img id="left" src={Portrait} />
        <img id="middle" src={Setup} />
        <img id="right" src={Wonderspaces} />
      </PicturesContainer>
      <h1>Welcome!</h1>
      <p>I'm a Computer Science major at UT Austin.</p>
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
          <img src={ComputerScience} />
          <h1>UT Austin Computer Science</h1>
          <p>I began my Computer Science studies at my dream university, UT Austin.</p>
          <p>In my spare time, I self-taught web technologies with basic courses and took on an Android course from CodePath.</p>
        </SingleSlide>
        <SingleSlide>
          <img src={ProMazo} />
          <h1>First Internship: ProMazo</h1>
          <p>Even after the COVID pandemic, I was contacted on LinkedIn and secured my first internship at a startup named ProMazo.</p>
          <p>I worked as a full stack developer on two apps: an internal PWA and our 100k Mentor Challenge mobile app. This was also my first real team experience, following a Scrum workflow.</p>
        </SingleSlide>
        <SingleSlide>
          <img src={EdgeLearning} />
          <h1>Another Opportunity: Edge Learning</h1>
          <p>Two of my close friends built a React/Redux SaaS from scratch for this organization, and they referred me to continue development on it!</p>
          <p>Most of my work was on the frontend, wireframing and redesigning the UI of the app.</p>
        </SingleSlide>
        <SingleSlide>
          <img src={Citi} />
          <h1>Incoming Opportunity at Citi!</h1>
          <p>Finally, I got accepted for an internship opportunity at Citi for Summer 2021!</p>
          <p>I will be a Global Consumer Technology Summer Analyst at Citi's Dallas, TX office.</p>
        </SingleSlide>
      </Slide>
    </SlideshowContainer>
  </Layout>
)

export default IndexPage
