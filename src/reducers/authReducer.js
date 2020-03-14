import { USER_LOGIN, ERR_MSG, LOGOUT } from "../actions/actionType";
const defaultAuthReducer = () => {
	if (localStorage.getItem("auth")) {
		return JSON.parse(localStorage.getItem("auth"));
	} else {
		return {
			isLoading: false,
			redirect: false,
			error: ""
		};
	}
};

export const authReducer = (state = defaultAuthReducer(), action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				displayName: action.displayName,
				id: action.id,
				role: action.role,
				isLoading: false,
				redirect: true
			};
		case ERR_MSG:
			return {
				...state,
				error: action.data
			};
		case LOGOUT:
			return {};
		default:
			return state;
	}
};
