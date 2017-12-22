import React, { Component } from "react";
import Task from './Task';

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
							<Task task={ task } onDelete={ onDelete } />

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






