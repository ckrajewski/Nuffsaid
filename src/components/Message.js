import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
  },
});
const messageThemes = {
  1: '#F56236',
  2: '#FCE788',
  3: '#88FCA3',
};

export default function Message(props) {
  const { message, priority, clearMessage } = props;
  const handleClearMessage = (event) => {
    event.stopPropagation();
    clearMessage();
  };

  const classes = useStyles();

  return (
    <div>
      <Paper
        elevation={5}
        className={classes.paper}
        style={{ backgroundColor: messageThemes[priority] }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          className={classes.grid}>
          <Grid item className={classes.message}>
            {message}
          </Grid>
          <Grid item className={classes.clear}>
            <div onClick={handleClearMessage}>Clear</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
