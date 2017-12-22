export const setTasks = tasks => {
	return {
		type: "setTasks",
		tasks: tasks,
	};
};

export const setTask = task => {
	return {
		type: "setTask",
		task: task,
	};
};

export const addTask = ({ task, priority }, id) => {
	return {
		type: "addTask",
		task: task,
		priority: priority,
		id: id,
	};
};


export const deleteTask = (id) => {
	return {
		type: "deleteTask",
		id: id,
	};
};