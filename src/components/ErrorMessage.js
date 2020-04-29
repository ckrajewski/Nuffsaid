import React, { useState, useEffect } from 'react';
import { IconButton, Grid, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    paddingLeft: '3%',
    paddingRight: '8%',
    height: '3em',
    backgroundColor: '#F56236',
  },
  container: {
    width: '40%',
    margin: 'auto',
    marginBottom: '0.25%',
  },
  message: {
    paddingTop: '3%',
  },
  clear: {
    alignSelf: 'center',
  },
  grid: {
    height: '100%',
  },
});

export default function ErrorMessage(props) {
  const [errorObj, setErrorObj] = useState({ timeOutId: null, errorMessage: null });
  const { errorMessage, timeOutId } = errorObj;
  const { message } = props;
  const clearMessage = (event) => {
    event.stopPropagation();
    setErrorObj({ timeOutId: null, errorMessage: null });
  };
  const showErrorForTwoSeconds = () => (setTimeout(() => {
    setErrorObj({ timeOutId: null, errorMessage: null });
  }, 2000));
  useEffect(() => {
    if (message) {
      const { priority } = message;
      if (priority === 1) {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        setErrorObj({ errorMessage: message.message, timeOutId: showErrorForTwoSeconds() });
      }
    }
  }, [message]);

  const classes = useStyles();

  return (
    <div className={classes.container} style={{ visibility: errorMessage ? 'initial' : 'hidden' }}>
      <Paper
        elevation={5}
        className={classes.paper}>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.grid}>
          <Grid item>
            <IconButton onClick={clearMessage}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item>
            {errorMessage}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
