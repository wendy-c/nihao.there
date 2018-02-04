import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImpactfulHeader, Background } from './styles';
import styled from "styled-components";
import * as logoUrl from "./assets/nihaothere.png";

const Button = styled.span`
  display: block;
  background-color: #5858e8;
  border-radius: 5px;
  font-size: 2em;
  padding: 0.5rem;
  margin: 0.5rem;
  z-index: 10;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 20rem;

  @media(max-width: 800px) {
    position: relative;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SquishyContainer = Container.extend`
max-height: 50%;
  @media screen and (orientation: portrait) {
    img {
      width: 30rem;
      position: relative;
      top: 20%;
    }
  }

  @media screen and (orientation: landscape) {
    img { 
      width: 20rem;
    }
  }
`

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <SquishyContainer>
          <img src={logoUrl} />
          <Button><Link to="/lessons">Begin Lessons</Link></Button>
        </SquishyContainer>
        <Footer>
          <Background color='red'>
            <ImpactfulHeader>
              <div><h1>Ni hao!</h1></div>
              <div><h2>你 好！</h2></div>
            </ImpactfulHeader>
          </Background>
        </Footer>
      </div>
    );

  }
}
