import React, { Component } from 'react';

class Task extends Component {
	componentDidMount() {
		this.props.onLoad();
	}


	render () {
		const { onDelete, task } = this.props;
	

		return ( 

			<li className="list-group-item" key={ task.get("id") } >
				{ task.get("task") }
				<button onClick={ onDelete }>
					x
				</button>
			</li>

		)
	}

}


export default Task;