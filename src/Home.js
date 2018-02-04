import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return(
        <div className="home-container">
          <div className="welcome">Welcome!</div>
          <Link to="/lessons">Click here to begin lessons</Link>
        </div>
      );
  }
}
