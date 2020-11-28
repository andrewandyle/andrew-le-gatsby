import styled from 'styled-components'
import { gradients } from '../colors'
import { rainbow } from '../keyframes'

export const Wrapper = styled.header`
  background: ${gradients['rainbow']};
  background-size: 1800% 1800%;
  margin-bottom: 1.45rem;
  animation: ${rainbow} 18s ease infinite;
  display: flex;
  align-items: center;
  padding: 0.8em 0 0.8em 0;
  justify-content: space-evenly;

  & a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 36px;
    transition: 600ms ease;

    &:hover {
      filter: drop-shadow(0px 0px 10px white);
      transition: 600ms ease;
    }
  }
`
