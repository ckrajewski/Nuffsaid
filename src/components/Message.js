import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { red, blue, yellow } from '@material-ui/core/colors';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  paper: {
    paddingLeft: '3%',
    paddingRight: '8%',
    marginBottom: '3%',
    height: '4.5em',
  	},
  	message: {
  		paddingTop: '3%',
  		alignSelf: 'baseline',
  	},
  	clear: {
  		alignSelf: 'center',
  	},
  	grid: {
  		height: '100%',
  	}
  });  
const messageThemes = {
	1:'#F56236',
	2:'#FCE788',
	3:'#88FCA3',
}

export default function Message(props) {
	const {message, priority, clearMessage} = props;
	return (
<div> 

<Paper elevation={5} className={css(styles.paper)} style={{backgroundColor: messageThemes[priority]}}>
<Grid
  container
  direction="row"
  justify="space-between"
  className={css(styles.grid)}
>
<Grid item className={css(styles.message)}>
{message}
</Grid>
<Grid item className={css(styles.clear)} >
<div onClick={(event) => {event.stopPropagation(); debugger; clearMessage()}}>Clear</div>
</Grid>
</Grid>
</Paper>
</div>
		)
}