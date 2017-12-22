import React, { Component } from "react";
import Task from '../containers/Task';

class Tasks extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render () {
		const { tasks, onDelete, key, content } = this.props;
		console.log(tasks);
		return(

			<div>
				{tasks.count() ?  
					<ul className="list-group">
						{tasks.map(task => (
							<Task key={ task.get("id") } task={ task } onDelete={ onDelete } />

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






