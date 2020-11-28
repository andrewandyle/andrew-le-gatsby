import { keyframes } from 'styled-components'

export const rainbow = keyframes`
  0%{background-position:0% 82%;}
  50%{background-position:100% 19%;}
  100%{background-position:0% 82%;}
`

export const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-15%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`

export const fadeInFromLeft = keyframes`
  0% {
     opacity: 0;
     transform: translateX(-15%);
  }
  100% {
     opacity: 1;
     transform: translateX(0%);
  }
`

export const fadeInFromRight = keyframes`
  0% {
     opacity: 0;
     transform: translateX(15%);
  }
  100% {
     opacity: 1;
     transform: translateX(0%);
  }
`
