import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Slideshow
import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

import Avatar from "../images/icons/avatar.png"
import Persona from "../images/life/persona.jpg"
// Slide Images
import Coding from "../images/life/slideshow/coding.jpg"
import Downtown1 from "../images/life/slideshow/downtown1.jpg"
import Downtown2 from "../images/life/slideshow/downtown2.jpg"
import Outdoors1 from "../images/life/slideshow/outdoors1.jpg"
import Outdoors2 from "../images/life/slideshow/outdoors2.jpg"
import Sushi1 from "../images/life/slideshow/sushi1.jpg"
import Sushi2 from "../images/life/slideshow/sushi2.jpg"
import Piano from "../images/life/slideshow/piano.jpg"

import {
  AboutMe,
  SlideshowContainer,
  SingleSlide,
  Favorites,
  SectionsContainer,
  SectionCard,
} from "../styles/life.styles"

const LifePage = () => (
  <Layout back="/">
    <SEO title="Life" />
    <h1>About Me</h1>
    <AboutMe>
      <img id="avatar" src={Avatar} alt="Avatar" />
      <div>
        <p>
          Hello! I'm Andrew Le, a Computer Science major at The University of
          Texas at Austin.
        </p>
        <p>
          I'm passionate about collaborating with teams to develop meaningful
          software products and features to provide to clients. I enjoy hands-on
          learning for new skills, and I strive to continuously improve as a
          developer and team player.
        </p>
        <p>
          Aside from that, I'm as much of an outdoor person as I am an indoor
          person. Some days I go out to bike, find new views or restaurants, and
          work out. Other days I look up Reddit memes, play RPGs, or binge watch
          animes.
        </p>
      </div>
    </AboutMe>
    <h1>Favorites</h1>
    <Favorites>
      <div>
        <b>Animes:</b>
        <ul>
          <li>Dragon Ball Z/Super</li>
          <li>JoJo's Bizarre Adventure</li>
          <li>Death Note</li>
          <li>Kaguya-sama: Love is War</li>
          <li>Parasyte -the maxim-</li>
          <li>KonoSuba</li>
          <li>One Punch Man</li>
        </ul>
      </div>
      <div>
        <b>Games:</b>
        <ul>
          <li>Persona 3/4/5</li>
          <li>Super Smash Bros.</li>
          <li>Overwatch</li>
          <li>Minecraft</li>
          <li>Terraria</li>
        </ul>
        <b>TV Shows:</b>
        <ul>
          <li>The Office</li>
          <li>Game of Thrones</li>
        </ul>
      </div>
      <div style={{ marginRight: 0 }}>
        <img src={Persona} alt="Persona" />
      </div>
    </Favorites>
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
