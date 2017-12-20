import React from "react";
import { Link } from "react-router-dom";

const Header = ({children, subtitle}) => (
	<div className="page-header">
		<h1>
			<Link to="/">{ children }</Link>
			{ " " }
			{ subtitle ? <small>{ subtitle }</small> : null }

		</h1>
	</div>	

	);

export default Header;