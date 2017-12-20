import { connect } from "react-redux";

import Tasks from "../components/Tasks";
import { fetchTasks } from "../data/actions/api";

const mapStateToProps = state => {
	return {
		tasks: state.get("tasks"),
	};

};

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(fetchTasks()),
	};

};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);