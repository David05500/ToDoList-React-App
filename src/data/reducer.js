import { Map, List } from "immutable";

const createTask = ({ task, priority, id }) => {
	return Map({
		id: id,
		task: task,
		priority: priority,
	})
}


const setTasks = (state, { tasks }) => state.set("tasks", tasks);

const setTask = (state, { task }) => state.update("tasks", tasks => {
	let exists = tasks.find(t => t.get("id") === task.get("id"));

	if (!exists) {
		return tasks.push(task);
	}

	return tasks.map(t => t.get("id") === task.get("id") ? task : t)
});


const addTask = (state, data) => state.update("tasks", tasks => tasks.push(createTask(data)));

const deleteTask = (state, { id }) => {
	return state.update("tasks", tasks => {
		return tasks.filter(( t ) => t.get("id") !== +id)
	});
}

const reducer = (state, action) => {

	switch (action.type) {
		case "setTasks": return setTasks(state, action);
		case "setTask": return setTask(state, action);
		case "addTask": return addTask(state, action);
		case "deleteTask": return deleteTask(state, action);

		default: return state;
	}
}
export default reducer;