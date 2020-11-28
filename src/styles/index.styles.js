import styled from 'styled-components'
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
  background: linear-gradient(45deg, #2196F3 30%, #21CBF3 90%);
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, .3);
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
`

export const SlideshowContainer = styled.div`
  text-align: center;
  animation: ${fadeInFromTop};
  animation-duration: 1400ms;
`

export const SingleSlide = styled.div`
  text-align: left;
  height: auto;
  padding: 40px;
`

export const SlideTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 500;
  align-items: center;

  & img {
    height: 75px;
    margin-right: 15px;
  }
`
