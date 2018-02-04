import styled, {css} from 'styled-components';

export const ImpactfulHeader = styled.header`
  position: relative;
  font-family: impact;
  letter-spacing: 1px;
  font-style: italic;
  color: white;
  * {
    margin: 5px 0px 0px 50px;
    padding: 0px;
    position: relative;
  }
  *:first-child {
    text-align: left;
    left: 3px;
    font-size: 100px;
  }
  *:nth-child(n+2) {
    color: blue;
    font-size: 60px;
    left: ${window.innerWidth}px;
    position: relative;
    animation-direction: forward;
    animation-duration: 0.5s;
    animation-name: slide-left;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes slide-left {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(${-700}px);
    }
  }
  `;

export const Background = styled.div`
  ${
    props => css`
      background-color: ${props.color};
      opacity: 0.65;
      padding: 30px;
    `
  }
`
