import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Slideshow
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

// Slide Images
import Coding from "../images/life/slideshow/coding.jpg"
import DDR from "../images/life/slideshow/DDR.gif"
import Downtown1 from "../images/life/slideshow/downtown1.jpg"
import Downtown2 from "../images/life/slideshow/downtown2.jpg"
import Outdoors1 from "../images/life/slideshow/outdoors1.jpg"
import Outdoors2 from "../images/life/slideshow/outdoors2.jpg"
import Sushi1 from "../images/life/slideshow/sushi1.jpg"
import Sushi2 from "../images/life/slideshow/sushi2.jpg"
import Piano from "../images/life/slideshow/piano.jpg"

import {
  SlideshowContainer,
  SingleSlide,
  SectionsContainer,
  SectionCard,
} from "../styles/life.styles"

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
          <h1>Other than coding, I like to use my time to...</h1>
          <img src={Coding} alt="Coding" />
        </SingleSlide>
        <SingleSlide>
          <h1>Play DDR!</h1>
          <iframe
            id="DDR-video"
            title="DDR"
            src="https://drive.google.com/file/d/1qzsadumTwrYVpq1njyeiZfXiuPMHOWMD/preview"
            width="512"
            height="384"
            style={{ border: "none" }}
            allowFullScreen
            allow="autoplay"
          ></iframe>
          <img id="DDR-gif" src={DDR} alt="DDR" />
        </SingleSlide>
        <SingleSlide>
          <h1>Explore downtown Austin!</h1>
          <div>
            <img src={Downtown1} alt="Biking" />
            <img src={Downtown2} alt="Kayaking" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h1>Find new scenic views in Austin!</h1>
          <div>
            <img src={Outdoors1} alt="Sunrise" />
            <img src={Outdoors2} alt="Sunset" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h1>Make sushi at home!</h1>
          <div>
            <img src={Sushi1} alt="Poke" />
            <img src={Sushi2} alt="Sushi" />
          </div>
        </SingleSlide>
        <SingleSlide>
          <h1>Play the piano!</h1>
          <div>
            <img src={Piano} alt="Piano" />
          </div>
        </SingleSlide>
      </Slide>
    </SlideshowContainer>
    <h1>Collections</h1>
    <SectionsContainer>
      <Link to="/life/austin-food">
        <SectionCard color="pinkYellow" delay={3}>
          <h3>Austin Food Favorites</h3>
          <p>My recommendations for restaurants to try in Austin.</p>
        </SectionCard>
      </Link>
      <Link to="/life/swe">
        <SectionCard color="darkBlue" delay={3}>
          <h3>SWE Blog Posts</h3>
          <p>A series of blog posts from CS373, Software Engineering.</p>
        </SectionCard>
      </Link>
      <Link to="/life/oop">
        <SectionCard color="purple" delay={3}>
          <h3>OOP Blog Posts</h3>
          <p>
            A series of blog posts from CS371p, Object-Oriented Programming.
          </p>
        </SectionCard>
      </Link>
    </SectionsContainer>
  </Layout>
)

export default LifePage
