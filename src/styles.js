import styled, {css} from 'styled-components';

export const ImpactfulHeader = styled.header`
  position: relative;
  font-family: impact;
  letter-spacing: 1px;
  font-style: italic;
  color: white;
  font-size: 70px;
  * {
    padding: 0px;
    position: relative;
    height: 200px;
    left: 0px;
    width: ${window.innerWidth}px;
  }
  *:first-child {
    margin: 0px;
    text-align: center;
    *:first-child {
      left: ${-1.2*window.innerWidth}px;
      text-align: center;
      animation-direction: forward;
      animation-duration: 0.2s;
      animation-name: slide-right;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  *:nth-child(2) {
    position: relative;
    // width: ${window.innerWidth}px;
    background-color: grey;
    box-shadow: 0px -5px 15px 6px white;
    *:first-child {
      position: relative;
      top: 10%;
      color: blue;
      text-align: center;
      left: ${window.innerWidth}px;
      animation-delay: 0.2s;
      animation-direction: forward;
      animation-duration: 0.2s;
      animation-name: slide-left;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @keyframes slide-left {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(${-0.8 * window.innerWidth}px);
    }
  }
  @keyframes slide-right {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(${window.innerWidth}px);
    }
  }
  `;

export const Background = styled.div`
  ${
    props => css`
      background-color: ${props.color};
      opacity: 0.65;
      padding: 20px 0px 0px 0px;
    `
  }
`
