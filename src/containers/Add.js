import { connect } from "react-redux";
import Add from "../components/Add";
import { plusTask } from "../data/actions/api";

const mapDispatchToProps = dispatch => {
		
	return {
		onSubmit: data => dispatch(plusTask(data)), 
	};
};
export default connect(null, mapDispatchToProps)(Add);