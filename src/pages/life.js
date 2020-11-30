import React from "react"	
import { Link } from "gatsby"

import Layout from "../components/layout"	
import SEO from "../components/seo"

// Slideshow
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

// Slide Images
import CSFriends1 from '../images/life/slideshow/csfriends1.jpg'
import CSFriends2 from '../images/life/slideshow/csfriends2.jpg'
import HSFriends1 from '../images/life/slideshow/hsfriends1.jpg'
import HSFriends2 from '../images/life/slideshow/hsfriends2.jpg'
import Outdoors1 from '../images/life/slideshow/outdoors1.jpg'
import Outdoors2 from '../images/life/slideshow/outdoors2.jpg'
import Sushi1 from '../images/life/slideshow/sushi1.jpg'
import Sushi2 from '../images/life/slideshow/sushi2.jpg'
import Persona1 from '../images/life/slideshow/persona1.jpg'
import Persona2 from '../images/life/slideshow/persona2.jpg'
import Piano from '../images/life/slideshow/piano.jpg'

import { SectionsContainer, SectionCard, SlideshowContainer, SingleSlide } from '../styles/life.styles'

const LifePage = () => (
  <Layout back="/">	
    <SEO title="Life" />
    <SlideshowContainer>
      <Slide
        autoplay={false}
        infinite={false}
        transitionDuration={500}
        easing="ease"
      >
        <SingleSlide id="intro">
          <h1>A little bit about my personal life...</h1>
        </SingleSlide>
        <SingleSlide>
          <h3>I mostly work with and hang out with my CS friends!</h3>
          <div>
            <img src={CSFriends1} alt="KBBQ w/ Friends" />
            <img src={CSFriends2} alt="Texas Snow w/ Friends" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h3>I'm close to two of my best friends from high school, back at San Antonio!</h3>
          <div>
            <img src={HSFriends1} alt="HS Prom" />
            <img src={HSFriends2} alt="La Cantera" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h3>I like to find outdoor activities around downtown Austin!</h3>
          <div>
            <img src={Outdoors1} alt="Biking" />
            <img src={Outdoors2} alt="Kayaking" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h3>My favorite food by far is sushi and poke, I like making it myself!</h3>
          <div>
            <img src={Sushi1} alt="Poke" />
            <img src={Sushi2} alt="Sushi" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h3>My favorite game franchise is Persona, and I rep it the most!</h3>
          <div>
            <img src={Persona1} alt="Joker Mask" />
            <img src={Persona2} alt="Series Posters" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h3>My favorite hobby is playing piano, I've learned for over 10 years!</h3>
          <div>
            <img src={Piano} alt="Piano" />
          </div>
        </SingleSlide>
      </Slide>
    </SlideshowContainer>
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
