import { connect } from "react-redux";
import Task from "../components/Task";
import { delTask, fetchTask } from "../data/actions/api";



const mapDispatchToProps = (dispatch, { task } ) => {
	return {
		onDelete: () => dispatch(delTask(task.get("id"))),
		onLoad: () => dispatch(fetchTask(task.get("id"))),
	}
}


export default connect(null , mapDispatchToProps)(Task);