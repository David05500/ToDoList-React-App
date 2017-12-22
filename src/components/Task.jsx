import React, { Component } from 'react';

class Task extends Component {
	componentDidMount() {
		this.props.onLoad();
	}


	render () {

		const { task, onDelete } = this.props;

		return (
			<li  style={ listItemStyle }className="list-group-item" key={ task.get("id") } >
				{ task.get("task") }
				<button className="btn btn-danger" style={ deleteStyle } onClick={ onDelete }>
					x
				</button>
			</li>

		)
	}


}

export default Task;

let listItemStyle = {
	overflow: "auto",
	verticalAlign: "middle",
	color: "#053314",
}

let deleteStyle = {
	width: "5%",
	float: "right",
}