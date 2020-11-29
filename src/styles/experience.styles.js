import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop } from './keyframes'

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`

export const SingleSkill = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 500;
  animation: ${fadeInFromTop};
  ${({ delay }) => `animation-duration: ${delay && `${delay * 200}ms`};};`}

  & img {
    height: 50px;
    margin-bottom: 5px;
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

  & div {
    display: flex;
    align-items: center;
    margin-block-end: 1em;

    & h3 {
      margin-block-end: 0;
    }

    & img {
      width: 20px;
      margin-right: 10px;
    }
  }
`
