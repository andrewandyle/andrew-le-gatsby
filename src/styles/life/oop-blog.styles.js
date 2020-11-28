import styled from 'styled-components'
import { fadeInFromTop } from '../keyframes'

export const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;

  & a {
    text-decoration: none;
  }
`

export const BlogCard = styled.div`
  width: 150px;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  animation: ${fadeInFromTop};
  transition: 300ms ease;
  ${({ index }) => `animation-duration: ${index && `${index * 200}ms`};};`}

  &:hover {
    color: lightgreen;
    border: 2px solid lightgreen;
    transform: translateY(-10px);
    transition: transform 300ms ease;
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
