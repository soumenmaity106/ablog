import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
const AdminRoute = ({ component: Component, ...rest }) => {
	const logindata = useSelector(state => state.auth);
	console.log(logindata);
	return (
		<Route
			{...rest}
			render={props =>
				logindata.role === 3 ? (
					<React.Fragment>
						<Header />
						<Component {...props} />
					</React.Fragment>
				) : (
					<React.Fragment>
						<Redirect to="/" />
					</React.Fragment>
				)
			}
		/>
	);
};
export default AdminRoute;
