import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop, fadeInFromLeft, fadeInFromRight } from './keyframes'

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
