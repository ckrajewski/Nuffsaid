import React, { useState, useEffect } from 'react';
import { IconButton, Grid, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    paddingLeft: '3%',
    paddingRight: '8%',
    height: '3em',
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
const messageThemes = {
  1: '#F56236',
  2: '#FCE788',
  3: '#88FCA3',
};

export default function ErrorMessage(props) {
  const [errorObj, setErrorObj] = useState({ showError: false, timeOutId: null });
  const { showError, timeOutId } = errorObj;
  const { message } = props;
  const clearMessage = (event) => {
    event.stopPropagation();
    setErrorObj({ showError: false, timeOutId: null });
  };
  const showErrorForTwoSeconds = () => (setTimeout(() => {
    setErrorObj({ showError: false, timeOutId: null });
  }, 2000));
  useEffect(() => {
    if (message) {
      const { priority } = message;
      if (priority === 1) {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        setErrorObj({ showError: true, timeOutId: showErrorForTwoSeconds() });
      } else if (showError && timeOutId === null) {
        setErrorObj({ showError: false, timeOutId: null });
      }
    }
  }, [message]);

  const classes = useStyles();

  return (
    <div className={classes.container} style={{ visibility: showError ? 'initial' : 'hidden' }}>
      <Paper
        elevation={5}
        className={classes.paper}
        style={{ backgroundColor: messageThemes[1] }}>
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
            {message ? message.message : null}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
