import axios from "axios";
import { USER_LOGIN, ERR_MSG, LOGOUT } from "./actionType";
const URL = process.env.REACT_APP_API_URL;
export const login = (displayName, id, role) => ({
	type: USER_LOGIN,
	displayName,
	id,
	role
});

export const loginErr = data => ({
	type: ERR_MSG,
	data
});

export const logout = () => ({
	type: LOGOUT
});

export const startLogin = data => {
	return async dispatch => {
		try {
			const response = await axios.post(`${URL}/api/login`, data);
			const user = {
				displayName: `${response.data.data.firstname} ${response.data.data.lastname}`,
				id: response.data.data._id,
				token: response.data.token,
				role: response.data.data.userType
			};
			localStorage.setItem("auth", JSON.stringify(user));
			dispatch(login(user.displayName, user.id, user.role));
		} catch (e) {
			console.log(e.response);
			dispatch(loginErr(e.response.data.message));
			// throw new Error(e.response.data.message);
		}
	};
};

export const authLogout = data => {
	return async dispatch => {
		try {
			const { token } = JSON.parse(localStorage.getItem("auth"));
			localStorage.removeItem("auth");
			dispatch(logout());
		} catch (e) {
			localStorage.removeItem("auth");
			dispatch(logout());
		}
	};
};
