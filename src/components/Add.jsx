import React from "react";

import Form from "../Forms/Form";

const fields = [
	{ name: "task", label:"New Task", value:"" },
];


const Add = ({ onSubmit }) => (
	<div>
		<h2>Add New Task</h2>

		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Add Task"/>

	</div>

	);