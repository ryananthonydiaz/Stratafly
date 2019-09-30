import React from 'react';
import { IconButton, Grid, Typography } from '@material-ui/core';
import TravellerIcon from '@material-ui/icons/PersonOutlined';

const Traveller = props => {
	const { classes, onClickTraveller, totalTravellers } = props;
	return (
		<Grid container>
			<Grid item>
				<IconButton aria-label="Traveller" onCLick={onClickTraveller}>
					<TravellerIcon className={classes.travellerIcon} />
					<Typography variant={'subtitle1'} color="textSecondary">
						{totalTravellers}
					</Typography>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default Traveller;
