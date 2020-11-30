import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop } from './keyframes'

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

export const SlideshowContainer = styled.div`
  text-align: center;
  animation: ${fadeInFromTop};
  animation-duration: 600ms;
  margin-bottom: 50px;
  
  & h1, h3 {
    font-weight: 500;
  }

  & img {
    height: 350px;

    @media only screen and (max-width: 768px) {
      height: auto;
      margin-top: 5px;
    }
  }

  #intro {
    height: 100%;
  }
`

export const SingleSlide = styled.div`
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 100%;
  }
`
