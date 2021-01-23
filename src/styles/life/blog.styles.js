import styled from 'styled-components'
import { gradients, shadows } from '../colors'
import { fadeInFromTop } from '../keyframes'

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`

export const BlogCard = styled.div`
  ${({ color }) => `
    background: ${color && `${gradients[color]}`};
    box-shadow: ${color && `${shadows[color]}`};
  };`}

  width: 150px;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  animation: ${fadeInFromTop};
  transition: 300ms ease;
  ${({ index }) => `animation-duration: ${index && `${index * 200}ms`};};`}

  &:hover {
    filter: saturate(200%);
    transform: translateY(-10px);
    transition: transform 300ms ease, filter 300ms ease;
  }
`

export const BlogBody = styled.div`
  & a {
    color: white;

    &:visited {
      color: gray;
    }
  }

  & li {
    font-weight: bold;

    & p {
      font-weight: normal;
    }
  }
`

export const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;

  & img {
    width: 500px;
  }
`
