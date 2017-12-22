import React from "react";

export default ({ name, label, value, onChange, className }) => (
	<div className="form-group">
		<label htmlFor={ name }>{ label }</label>
		<input value={ value } onChange={ onChange } id={ name } className={className}/>
	</div>

);

