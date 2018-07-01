import styled, { keyframes } from 'react-emotion';

export const spinningAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const LoaderContainer = styled.div`
  ${props => props.fullscreen ? `
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
  ;` : ''}

  ${props => props.inline ? `
    display: inline-block;
  ;` : ''}

  ${props => props.block ? `
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  ;` : ''}

  div {
    border-color: ${props => props.color || '#7a7a7a'};
    border-radius: 50%;
    border: 12px solid;
    width: 64px;
    height: 64px;
    animation: ${bounce} 1s ease infinite;
  }
`;

