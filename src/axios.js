import axios from "axios";

export default axios.create({
	baseURL: "http://homestead.test/api/",
	params: {},
	headers: {
		Accept: "applications/json"
	},

})