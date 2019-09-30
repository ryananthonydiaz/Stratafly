import React from 'react';
import { InputBase, InputAdornment } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core';

const CommongInputBase = props => {
	const { onChange, value, placeholder, icon, type } = props;
	const classes = useStyles();
	return (
		<InputBase
			startAdornment={
				<InputAdornment position="start" className={classes.textFieldIcon}>
					{icon}
				</InputAdornment>
			}
			fullWidth={true}
			placeholder={placeholder}
			value={value}
			type={type}
			classname={classes.input}
			onChange={event => onChange(event.target.value)}
		/>
	);
};

const useStyles = makeStyles(theme => ({
	input: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: theme.shape.borderRadius * 2,
		color: theme.palette.common.white,
		fontSize: theme.typography.subtitle1.fontWeight,
	},
	textFieldIcon: {
		paddingLeft: theme.spacing(1),
	},
}));

export default CommongInputBase;
