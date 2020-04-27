import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Message(props) {
	const {message, priority} = props;
	debugger;
	return (
<div> 
<Paper> {message} </Paper>
</div>
		)
}