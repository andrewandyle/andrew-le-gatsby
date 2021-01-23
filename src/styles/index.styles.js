import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeInFromLeft};
  animation-duration: 800ms;
  margin-bottom: 30px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${fadeInFromTop};
  animation-duration: 1000ms;
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

export const WelcomeContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
  animation: ${fadeInFromTop};
  animation-duration: 1000ms;
`

export const PicturesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;

  & img {
    margin-top: 50px;
    height: 300px;
  }

  #left {
    animation: ${fadeInFromLeft};
    animation-duration: 2400ms;
  }

  #middle {
    margin-top: 0px;
    animation: ${fadeInFromTop};
    animation-duration: 1200ms;
  }

  #right {
    animation: ${fadeInFromRight};
    animation-duration: 2400ms;
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;

    & img {
      margin-top: 0;
      width: auto;
    }

    #middle {
      display: none;
    }
  }
`
