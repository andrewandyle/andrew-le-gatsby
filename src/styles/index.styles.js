import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const MainHeader = styled.div`
  position: relative;
  margin-top: 80px;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    margin-top: 50px;
  }
`

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  #avatar {
    animation: ${fadeInFromLeft};
    animation-duration: 800ms;
    width: 500px;
  }

  #logo {
    position: absolute;
    right: 0;
    animation: ${fadeInFromRight};
    animation-duration: 800ms;
    width: 600px;

    @media only screen and (max-width: 900px) {
      position: relative;
    }
  }

  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeInFromTop};
  animation-duration: 1000ms;

  & img {
    margin-left: 20px;
    transition: 600ms ease;

    &:hover {
      filter: drop-shadow(0px 0px 10px white);
      transition: 600ms ease;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MarqueeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transform: rotate(20deg);
  filter: brightness(0.75);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const DownloadResume = styled.a`
  color: white;
  font-weight: 500;
  background: ${gradients['blue']};
  box-shadow: ${shadows['blue']};
  border: none;
  border-radius: 5px;
  height: 48px;
  padding: 12px 30px;
  margin-bottom: 50px;
  cursor: pointer;
  transition: 600ms ease;
  text-decoration: none;

  &:hover {
    filter: saturate(200%);
    transition: 600ms ease;
  }
`

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin-top: 75px;
  margin-bottom: 50px;

  & a {
    color: white;

    &:visited {
      color: gray;
    }
  }

  & img {
    animation: ${fadeInFromLeft};
    animation-duration: 1000ms;
    width: 350px;
    margin-right: 50px;
  }

  & div {
    animation: ${fadeInFromRight};
    animation-duration: 1000ms;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    font-size: 18px;
    margin-bottom: 25px;

    & img {
      width: 300px;
      margin-right: 0;
      margin-bottom: 50px;
    }
  }
`

export const SingleSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  margin: 0 20px;
  animation: ${fadeInFromTop};
  ${({ delay }) => `animation-duration: ${delay && `${delay * 200}ms`};};`}

  & img {
    height: 50px;
    margin-bottom: 5px;
  }
`

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  .vertical-timeline-element-content {
    color: black;

    & h3 {
      margin-top: 5px;
      margin-bottom: 5px;
    }

    & h4 {
      font-weight: 400;
    }

    & p {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }

  .vertical-timeline-element-date {
    color: white;
    margin: 0 10px;
  }

  @media only screen and (max-width: 1170px) {
    .vertical-timeline-element-date {
      color: black;
    }
    
    #promazo {
      width: 20px;
    }

    #citi {
      width: 30px;
    }
  }
`

export const SkillBubbles = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Skill = styled.div`
  font-size: 0.8125rem;
  padding: 5px 15px;
  margin: 2.5px;
  background: #e0e0e0;
  border: none;
  border-radius: 16px;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    ${({ color }) => `
      background: ${color && `${gradients[color]}`};
      box-shadow: ${color && `${shadows[color]}`};
    };`}
  }
`

export const TimelineLink = styled.a`
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer;
  transition: 600ms ease;
  text-decoration: none;
  margin: 5px;

  &:hover {
    filter: saturate(200%);
    transition: 600ms ease;
  }
`

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`

export const SectionCard = styled.div`
  ${({ color }) => `
    background: ${color && `${gradients[color]}`};
    box-shadow: ${color && `${shadows[color]}`};
  };`}

  width: 280px;
  min-height: 180px;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  animation: ${fadeInFromTop};
  transition: 300ms ease;
  ${({ delay }) => `animation-duration: ${delay && `${delay * 200}ms`};};`}

  &:hover {
    filter: saturate(200%);
    transform: translateY(-10px);
    transition: transform 300ms ease, filter 300ms ease;
  }
`
