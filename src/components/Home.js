import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing(2)
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary
	},
	imageHeight: {
		height: 400
	}
}));

const Home = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Header />
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs>
						<Paper className={classes.paper}>
							<img
								src="image/s1.jpg"
								className={classes.imageHeight}
								alt="Slider"
								width="100%"
							/>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	);
};
export default Home;
