import React, { Component } from "react";
import {Link} from "react-router-dom";

class Main extends Component {
  render() {
    return(
        <div>
          Home!!!

          <Link to="/lessons">Start Here</Link>
        </div>

      );
  }
}

export default Main;