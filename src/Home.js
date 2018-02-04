import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ImpactfulHeader, Background } from './styles';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Background color='red'>
          <ImpactfulHeader>
            <h1>Ni hao there! </h1>
            <div subheader><h2>你 好！</h2></div>
          </ImpactfulHeader>
        </Background>

        <div className="welcome">Welcome!</div>
        <Link to="/lessons">Click here to begin lessons</Link>
      </div>
    );
  }
}
