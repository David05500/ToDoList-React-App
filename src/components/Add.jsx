import React from "react";

import Form from "./Form/Form";

const fields = [
	{ name: "task", label:"task", value:"", className:"form-control" }
];

const fieldsPriority = [
	{ name: "priority", label:"priority", value:"", className:"form-control"}
];

const Add = ({ onSubmit }) => (
	<div>
		<h2>Add New Task</h2>

		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } fieldsPriority={ fieldsPriority } button="Add Task"/>


	</div>

);


export default Add;