import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { startsetCustomer } from "../actions/customerAction";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	}
}));
const BlogDashbord = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const actionData = useSelector(state => state.customer.customer);
	console.log(actionData);
	useEffect(() => {
		dispatch(startsetCustomer());
	}, []);
	return (
		<React.Fragment>
			<br></br>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{actionData &&
						actionData.map(item => (
							<Grid sm={4} item key={item._id}>
								<Paper className={classes.paper}>
									<Card>
										<CardActionArea>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="h2"
												>
													Name {item.name}
												</Typography>
												<Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
													Age {item.age}
													<br></br>
													Email {item.email}
													<br></br>
													Phone {item.phone}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Paper>
							</Grid>
						))}
				</Grid>
			</div>
		</React.Fragment>
	);
};
export default BlogDashbord;
