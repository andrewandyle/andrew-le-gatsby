import styled from 'styled-components'
import { gradients } from '../colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const AccordionContainer = styled.div`
  width: 50%;

  .accordion__button {
    background: ${gradients['pmGreen']};
    color: white;
    font-weight: 500;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  & li {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const PictureContent = styled.div`
  width: 45%;

  & div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;

    & img {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 100%;

    & img {
      margin-top: 20px;
    }
  }
`
