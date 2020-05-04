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
/**
  * ErrorMessage component renders the snack bar that appears at the top
  * when error messages come in
*/
export default function ErrorMessage(props) {
  const [errorObj, setErrorObj] = useState({ timeOutId: null, errorMessage: null });
  const { errorMessage, timeOutId } = errorObj;
  const { message, timeOutValue = 2000 } = props;

  /**
   * clears error message after user clicks icon
  */
  const clearMessage = (event) => {
    event.stopPropagation();
    clearTimeout(timeOutId);
    setErrorObj({ timeOutId: null, errorMessage: null });
  };
  /**
   * clears error message after a default value of two seconds
  */
  const showErrorForXSeconds = () => (setTimeout(() => {
    setErrorObj({ timeOutId: null, errorMessage: null });
  }, timeOutValue));

  /**
  * everytime a new message comes in, add its an error
  * set the errorMessage and timOutId. Clear Timeout if new message comes
  * and it has not been cleared yet
  */
  useEffect(() => {
    if (message) {
      const { priority } = message;
      if (priority === 1) {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        setErrorObj({ errorMessage: message.message, timeOutId: showErrorForXSeconds() });
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
