import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo-glyph.png"

const Header = ({children, subtitle}) => (
	<div  className="page-header">
		<h1 style= { divStyle }>
			<Link style={ titleStyle } to="/">{ children }</Link>
			
			<br />
			{ subtitle ? <small style={ subtitleStyle }>{ subtitle }</small> : null }
		
		</h1>
		<img style={ imgStyle } src={ Logo } />

		
	</div>	

	);

export default Header;

let divStyle = {
	display: "inline-block"
}


let imgStyle = {
	width: "20%",
	height: "auto",
	display: "inline-block",


}

let titleStyle = {
	fontFamily:  'Mountains of Christmas, cursive',
	color: "#fcfcfc",
	fontSize: 70
}

let subtitleStyle = {
	color: "#f7f7f7"
}