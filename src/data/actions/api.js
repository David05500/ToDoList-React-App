import axios from "../../axios";
import { fromJS } from "immutable";
import {setTasks} from "./state";

export const fetchTasks = () => dispatch => {
	axios.get("/tasks").then(response => {

		const tasks = fromJS(response.data);
		dispatch(setTasks(tasks));
	});
};