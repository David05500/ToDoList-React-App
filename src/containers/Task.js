import { connect } from "react-redux";
import Task from "../components/Task";
import { delTask } from "../data/actions/api";

const mapStateToProps = (sate, { id }) => {
	const tasks = state.get("tasks");
	const task = tasks.find(t => t.get("id") === +id);
	return {
		task: task,
	}
}

const mapDispatchToProps = (dispatch, { id } ) => {
	return {
		onDelete: () => dispatch(delTask(id)),
		onLoad: () => dispatch(fetchTask(id)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Task);