import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImpactfulHeader, Background } from './styles';
import styled from "styled-components";

const Button = styled.span`
  display: block;
  background-color: #2020e4;
  opacity: 0.65;
  border-radius: 5px;
  font-size: 2em;
  padding: 0.5rem;
  margin: 1rem;
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
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export default class Home extends Component {
  render() {

    return (
      <div className="home-container">
        <Container>
          <img style={{ maxWidth: "300px" }} src="./assets/nihaothere.png" />
          <Button><Link to="/lessons">Begin Lessons</Link></Button>
        </Container>
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
