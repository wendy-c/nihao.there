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
  }
  *:first-child {

    margin: 0px;
    text-align: center;
    left: 0px;
  }
  *:nth-child(2) {
    position: relative;
    width: ${window.innerWidth}px;
    height: 200px;
    background-color: grey;
    left: 0px;
    box-shadow: 0px -5px 15px 6px white;
    * {
      position: relative;
      top: 10%;
      color: blue;
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
      transform: translate(${-0.98 * window.innerWidth}px);
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
