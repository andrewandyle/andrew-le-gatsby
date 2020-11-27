import styled from 'styled-components'
import { rainbow } from './Keyframes'

export const Wrapper = styled.header`
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;
  margin-bottom: 1.45rem;
  animation: ${rainbow} 18s ease infinite;
`
