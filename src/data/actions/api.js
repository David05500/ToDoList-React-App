import axios from "../../axios";
import { fromJS } from "immutable";
import {setTasks} from "./actions";
import { addTask } from "./actions";
import { deleteTask } from "./actions";
import { setTask } from "./actions";


export const fetchTasks = () => dispatch => {
	axios.get("/tasks").then(response => {

		const tasks = fromJS(response.data);
		dispatch(setTasks(tasks));

	});
};

export const fetchTask = id => dispatch => {
	axios.get("/tasks/" + id).then(response => {
		const task = fromJS(response.data);
		dispatch(setTask(task));
	})
}


export const plusTask = ({ task, priority }) => dispatch => {
	axios.post("/tasks", {
		task: task,
		priority: priority, 
	}).then(response => {
		const tasks = fromJS(response.data);
		dispatch(addTask(task, priority));
	})	
}

export const delTask = id =>  dispatch => {
	axios.delete("/tasks/" + id).then(response => {

		dispatch(deleteTask(id));
	})
}