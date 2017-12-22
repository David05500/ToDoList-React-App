import React from "react";

export default ({ name, label, value, onChange, className }) => (

	<div className="form-group">
		<label htmlFor={ name }>{ label }</label>
		<select value={value} onChange={onChange} className={className}>
			<option value=""> Select a priority level </option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
	</div>	
);
