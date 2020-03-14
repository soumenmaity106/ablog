import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { customerReducer } from "./customerReducer";

const rootreducer = combineReducers({
	auth: authReducer,
	customer: customerReducer
});
export default rootreducer;
