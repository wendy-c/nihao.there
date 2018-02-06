import React from "react";
import {Link} from "react-router-dom";
import * as navIconUrl from "./assets/nihaothere.png";

const Nav = props => 
	<div>
	  <nav>
	    {props.location.pathname !== "/" && <Link to="/"><img style={{ maxWidth: "100px" }} src={navIconUrl} /></Link>}
	  </nav>
	  {props.children}
	</div>

export default Nav;