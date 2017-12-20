import React, { Component } from "react";

class Tasks extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { tasks } = this.props;
		console.log(tasks);
		return(
			<div>
				{tasks.count() ?  
					<ul className="list-group">
						{tasks.map(task => (
							<li className="list-group-item" key={ tasks.get("id") }> {task.get("task") }
							</li>
						))}
					</ul>
				: 
				<p>No tasks found</p>
				}
			</div>

		
		)
	}
}
export default Tasks;





