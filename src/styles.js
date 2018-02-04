import styled, {css} from 'styled-components';

export const ImpactfulHeader = styled.header`
  position: relative;
  font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  letter-spacing: -0.3em;
  font-style: italic;
  color: white;
  
  * {
    padding: 0%;
    position: relative;
    height: 10em;
    left: 0px;
    width: 100%;
  }
  *:first-child {
    margin: 0px;
    text-align: center;
    *:first-child {
      font-size: 6em;
      left: -120%;
      text-align: center;
      animation-direction: forward;
      animation-duration: 0.3s;
      animation-name: slide-right;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  *:nth-child(2) {
    position: relative;
    // background-color: grey;
    // box-shadow: 0px -5px 15px 6px white;
    *:first-child {
      position: relative;
      top: 10%;
      color: blue;
      text-align: center;
      font-size: 6em;
      left: 100%;
      animation-delay: 0.2s;
      animation-direction: forward;
      animation-duration: 0.3s;
      animation-name: slide-left;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
  @keyframes slide-left {
    from {
      transform: translate(0%);
    }
    to {
      transform: translate(-80%);
    }
  }
  @keyframes slide-right {
    from {
      transform: translate(0%);
    }
    to {
      transform: translate(100%);
    }
  }
  `;

export const Background = styled.div`
  ${
    props => css`
      // background-color: ${props.color};
      opacity: 0.65;
      padding: 1em 0em 0em 0em;
      background: #3a1c71; /* fallback for old browsers */
      background: -webkit-linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to bottom, #3a1c71, #d76d77, #ffaf7b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    `
  }
`
