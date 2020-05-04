import React from 'react';
import {
  Typography, Paper, Grid, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { messageThemes } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    textTransform: 'none',
  },
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
}));

/**
  * Message component renders each message
  * Corresponding messages are rendered for each given prioirty
*/
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
            <Typography variant="body1">
              {message}
            </Typography>
          </Grid>
          <Grid item className={classes.clear}>
            <Button className={classes.button} onClick={handleClearMessage}>Clear</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
