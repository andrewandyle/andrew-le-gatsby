import styled from "styled-components"
import { gradients } from "../colors"

const colorMapping = {
  favorites: "blue",
  westCampus: "purple",
  deals: "red",
  desserts: "pinkYellow",
}

export const TabsRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`

export const Tab = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid thistle;
    color: thistle;
  }

  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid white;
    `}
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const PictureContent = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    & img {
      margin-top: 10px;
    }
    & h2 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    & img {
      margin: 20px 0;
    }
    & div {
      margin-bottom: 15px;
    }
  }
`

export const AccordionContainer = styled.div`
  width: 50%;
  .accordion__button {
    ${({ activeTab }) =>
      activeTab &&
      `
    background: ${gradients[colorMapping[activeTab]]};
    `}

    color: white;
    font-weight: 500;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .accordion__panel {
    padding: 10px 20px 20px 20px;
  }
  & li {
    margin-bottom: 0;
  }
  & p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
