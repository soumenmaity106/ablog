import { CUSTOMER } from "../actions/actionType";
export const customerReducer = (state = [], action) => {
	switch (action.type) {
		case CUSTOMER:
			console.log(action);
			return {
				...state,
				customer: action.customer.data
			};

		default:
			return state;
	}
};
