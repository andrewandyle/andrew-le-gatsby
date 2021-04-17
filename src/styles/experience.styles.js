import styled from 'styled-components'
import { gradients, shadows } from './colors'
import { fadeInFromTop } from './keyframes'

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
