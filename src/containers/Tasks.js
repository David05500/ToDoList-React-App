import { connect } from "react-redux";

import Tasks from "../components/Tasks";
import { fetchTasks } from "../data/actions/api";



const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),  // .filter -> filter out complete / incomplete (create seperate containers)
	};
};

const mapDispatchToProps = (dispatch, { key }) => {
	return {
	 
		onLoad: () => dispatch(fetchTasks()),

	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
 // dispatch(delTask(id)),