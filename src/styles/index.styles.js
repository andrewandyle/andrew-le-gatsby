import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const Wrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
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

    @media only screen and (max-width: 768px) {
      width: 250px;
    }
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

    @media only screen and (max-width: 768px) {
      width: 300px;
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
    transform: none;
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
