import { Map, List } from "immutable";


const setTasks = (state, { tasks }) => state.set("tasks", tasks);

const reducer = (state, action) => {

	switch (action.type) {
		case "setTasks": return setTasks(state, action);
		default: return state;
	}
}
export default reducer;