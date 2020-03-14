import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const PublicRuter = ({ component: Component, ...rest }) => {
	const logindata = useSelector(state => state.auth);
	console.log(logindata);
	return (
		<Route
			{...rest}
			render={props =>
				logindata.role === 1 ? (
					<React.Fragment>
						<Redirect to="/" />
					</React.Fragment>
				) : (
					<React.Fragment>
						<Header />
						<Component {...props} />
					</React.Fragment>
				)
			}
		/>
	);
};
export default PublicRuter;
