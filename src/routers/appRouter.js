import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PublicRuter from "./publicRoute";
import Loginpage from "../components/LoginPage";
import Register from "../components/RegisterPage";
import BlogDashbord from "../components/BlogDashborad";
import Home from "../components/Home";
import Adminroute from "../routers/adminRouter";
import { createBrowserHistory } from "history";
const history = createBrowserHistory;
const Approuter = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<PublicRuter path="/login" component={Loginpage} />
				<PublicRuter path="/register" component={Register} />
				<Adminroute path="/dashborad" component={BlogDashbord} />
			</Switch>
		</Router>
	);
};
export default Approuter;
