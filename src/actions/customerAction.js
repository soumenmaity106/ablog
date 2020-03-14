import axios from "axios";
import { CUSTOMER } from "./actionType";
const URL = process.env.REACT_APP_API_URL;
export const setcustomer = customer => ({
	type: CUSTOMER,
	customer
});

export const startsetCustomer = () => {
	return async dispatch => {
		try {
			const response = await axios.get(`${URL}/api/customer`);

			dispatch(setcustomer(response.data));
		} catch (error) {
			throw new error("could not recive customer");
		}
	};
};
