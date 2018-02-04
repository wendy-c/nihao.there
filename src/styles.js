import styled, {css} from 'styled-components';

export const ImpactfulHeader = styled.header`
  position: relative;
  font-family: impact;
  letter-spacing: 1px;
  font-style: italic;
  color: white;
  font-size: 80px;
  * {
    padding: 0px;
    position: relative;
  }
  *:first-child {
    margin: 5px 0px 0px 50px;
    text-align: left;
    left: 3px;
  }
  *:nth-child(2) {
    position: relative;
    width: ${window.innerWidth}px;
    height: 200px;
    background-color: grey;
    left: 0px;
    box-shadow: 0px -5px 15px 6px white;
    * {
      text-align: center;
      left: ${window.innerWidth}px;
      animation-direction: forward;
      animation-duration: 0.2s;
      animation-name: slide-left;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
  }
  @keyframes slide-left {
    from {
      transform: translate(0px);
    }
    to {
      transform: translate(${-1 * window.innerWidth}px);
    }
  }
  `;

export const Background = styled.div`
  ${
    props => css`
      background-color: ${props.color};
      opacity: 0.65;
      padding: 30px 0px 0px 0px;
    `
  }
`
