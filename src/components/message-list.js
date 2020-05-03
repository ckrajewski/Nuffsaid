import React, { useEffect, useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../api';
import ErrorMessage from './ErrorMessage';
import MessageGrid from './MessageGrid';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#88FCA3',
    lineHeight: '2rem',
  },
  buttonFont: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingLeft: '2em',
    paddingRight: '2em',
  },
  container: {
    width: '75%',
    margin: 'auto',
  },
  buttonContainer: {
    marginBottom: '5.5%',
    marginTop: '0.25%',
  },
  header: {
    borderTop: 'solid 1px',
    borderColor: grey[500],
  },
});

/**
* MessageList component is responsible for rendering the App
* references the imported Api, and is initialized
*/
export default function MessageList() {
  const [message, setMessage] = useState(null);
  const [isApiStarted, setIsApiStarted] = useState(true);
  const [api] = useState(new Api({
    messageCallback: (message) => {
      setMessage(message);
    },
  }));
  useEffect(() => {
    api.start();
  }, [api]);
  /**
   * used to handle clear functionality. Variable later points to
   * the higher order function clearMessages which calls handleClearAll in MessageGrid
   * in order to clear the state of sorted messages
  */
  const clickClear = useRef();

  const handleApiButton = () => {
    if (isApiStarted) {
      api.stop();
    } else {
      api.start();
    }
    setIsApiStarted(!isApiStarted);
  };
  const classes = useStyles();

  return (
    <div>
      <ErrorMessage message={message} />
      <div className={classes.header}>
        <div className={classes.container}>
          <Grid container spacing={3} justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleApiButton}
              >
                <Typography variant="body1" className={classes.buttonFont}>
                  {isApiStarted ? 'Stop' : 'Start'}
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              { /*
                * fires clickClear method, which is assigned to handleClearAll below
                * when Message Grid is called
                */
              }
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => clickClear.current()}
              >
                <Typography variant="body1" className={classes.buttonFont}>
                  Clear
                </Typography>
              </Button>
            </Grid>
          </Grid>
          { /*
            * initalizes clickClear to point to handleClearAll in MessageGrid
            */
          }
          {message ? (<MessageGrid setClear={(handleClearAll) => { clickClear.current = handleClearAll; }} message={message} priorities={[{ label: 'Error', value: 1 }, { label: 'Warning', value: 2 }, { label: 'Info', value: 3 }]} />) : null }
        </div>
      </div>
    </div>
  );
}
