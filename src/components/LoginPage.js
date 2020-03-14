import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { startLogin } from "../actions/authAction";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing(2)
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 800
	},
	inputfild: {
		with: 600
	},
	image: {
		width: 128,
		height: 128
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%"
	}
}));
const Loginpage = props => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
		email_address: ""
	});
	const [islodading, setloding] = React.useState(false);
	const dispatch = useDispatch();
	const datalogin = useSelector(state => state.auth);
	const [errmsg, seterrmsg] = React.useState();

	useEffect(() => {
		setloding(false);
		if (datalogin.role === 3) {
			props.history.push("/dashborad");
		}
	}, [datalogin]);

	const handleChange = event => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};
	const onSubmit = e => {
		e.preventDefault();
		if (!values.password || !values.email_address) {
			seterrmsg("Please enter required filed");
			return false;
		}
		setloding(true);
		dispatch(startLogin(values));
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				Username: hruday@gmail.com Password: hruday123
				{datalogin.error && <p>{datalogin.error}</p>}
				{islodading ? <CircularProgress /> : null}
				<Typography variant="h6">Login</Typography>
				<p style={{ color: "#FF0000" }}>{errmsg}</p>
				<form onSubmit={onSubmit}>
					<FormControl
						style={{ marginTop: 20 }}
						fullWidth
						variant="outlined"
					>
						<InputLabel htmlFor="outlined-adornment-email_address">
							Email *
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-email_address"
							labelWidth={70}
							onChange={handleChange}
							name="email_address"
						/>
					</FormControl>

					<FormControl
						style={{ marginTop: 20 }}
						fullWidth
						variant="outlined"
					>
						<InputLabel htmlFor="outlined-adornment-password">
							Password *
						</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={values.showPassword ? "text" : "password"}
							onChange={handleChange}
							name="password"
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</InputAdornment>
							}
							labelWidth={70}
						/>
					</FormControl>
					<Button
						variant="contained"
						style={{ marginTop: 20 }}
						color="primary"
						type="submit"
					>
						Login
					</Button>
				</form>
			</Paper>
		</div>
	);
};
export default Loginpage;
