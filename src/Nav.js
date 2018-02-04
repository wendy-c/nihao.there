import React from "react";
import {Link} from "react-router-dom";
import * as navIconUrl from "./assets/nihaothere.png";

const Nav = props => 
  <nav>
    <Link to="/"><img style={{ maxWidth: "100px" }} src={navIconUrl} /></Link>
  </nav>

export default Nav;