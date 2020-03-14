import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../actions/authAction";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const Header = () => {
	const classes = useStyles();
	const logindata = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const onClicklogout = () => {
		dispatch(authLogout());
	};
	return (
		<div className={classes.root}>
			{logindata.role === 3 ? (
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
						<Link className="linkcolor" to="/login" color="inherit">
							Post
						</Link>
						<Button
							variant="contained"
							color="primary"
							onClick={onClicklogout}
						>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			) : (
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>

						<Link className="linkcolor" to="/login" color="inherit">
							Login
						</Link>
						<Link
							className="linkcolor"
							to="/register"
							color="inherit"
						>
							Register
						</Link>
					</Toolbar>
				</AppBar>
			)}
		</div>
	);
};
export default Header;
