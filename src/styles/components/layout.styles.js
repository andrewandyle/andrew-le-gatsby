import styled from 'styled-components'
import { gradients, shadows } from '../colors'

export const BackContainer = styled.div`
  margin-bottom: 30px;

  & a {
    color: white;
    font-weight: 500;
    background: ${gradients['red']};
    box-shadow: ${shadows['red']};
    border: none;
    border-radius: 5px;
    height: 48px;
    padding: 12px 20px;
    cursor: pointer;
    transition: 600ms ease;
    text-decoration: none;

    &:hover {
      filter: saturate(200%);
      transition: 600ms ease;
    }
  }
`
