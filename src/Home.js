import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImpactfulHeader, Background } from "./styles";
import styled from "styled-components";
import * as logoUrl from "./assets/nihaothere.png";
import * as backgroundImage from "./assets/kelly-sikkema-450720.jpg";

const Button = styled.span`
  display: block;
  background-color: #5858e8;
  border-radius: 5px;
  font-size: 1.3em;
  padding: 0.5rem;
  margin: 1rem 0;
  z-index: 10;
  font-weight: 800;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 0.6em;
  text-align: center;
  color: #000;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
  padding-top: 5%;
  padding-left: 25%;

  @media (max-width: 615px) {
    padding: 5%;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  min-width: 940px;
  overflow: hidden;

  @media (max-width: 615px) {
    display: none;
  }
`;

const Header1 = styled.div`
  font-size: 2em;
  color: #ef5f4f;
  line-height: 2em;
  font-weight: 800;
`;

const Header2 = styled.div`
  font-size: 1.3em;

  @media (max-width: 615px) {
    color: #000;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <img style={{ maxWidth: "100px" }} src={logoUrl} />
        </nav>
        <BackgroundImg src={backgroundImage} />
        <Container>
          <Header1>Ni Hao there!</Header1>
          <Header2>Start your Chinese learning adventure now.</Header2>
          <Button>
            <Link to="/lessons">Begin Lessons</Link>
          </Button>
          <Footer>
            <p>This is a project created at Developer Week Hackathon 2018. It was the 1st place prize winner for best implementation of MyScript API.</p>
            <p>Team
            members: <a href="https://github.com/wendy-c">@wendy-c</a>,{" "}
            <a href="https://github.com/kaihsia">@kaihsia</a> and{" "}
            <a href="https://github.com/ClarabelleCheng-Yue">
              @clarabellecheng-yue
            </a>
            </p>
          </Footer>
        </Container>
      </div>
    );
  }
}