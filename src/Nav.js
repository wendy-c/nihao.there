import React from "react";
import {Link} from "react-router-dom";

const Nav = props => 
  <nav>
    <Link to="/"><img style={{ maxWidth: "100px" }} src="./assets/nihaothere.png" /></Link>
  </nav>

export default Nav;