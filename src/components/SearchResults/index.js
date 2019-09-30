import React from 'react';
import FlightTakeOffIcon from '@material-ui/icons/FlightTakeoffOutlinedimport';
import SortByIcon from '@material-ui/icons/SwapVert';
import { ResultHeader } from '../Common/ResultHeader';
import { Flights } from './Flights';
import { makeStyles } from '@material-ui/core/styles';

export const SearchResults = ({ flights, onSelect, headerLabel }) => {
	const { from, to, flightsWithFares } = flights;
	const classes = useStyles();
	return (
		<>
			<ResultHeader
				icon1={<FlightTakeOffIcon color={'secondary'} />}
				text={headerLabel || 'Departure flights'}
				icon2={<SortByIcon color={'secondary'} />}
			/>
			<Flights
				flightsWithFares={flightsWithFares || []}
				from={from}
				to={to}
				onSelect={onSelect}
				classes={classes}
			/>
		</>
	);
};
