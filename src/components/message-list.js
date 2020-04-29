import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../api';
import ErrorMessage from './ErrorMessage';
import ErrorGrid from './ErrorGrid';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#88FCA3',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  container: {
    width: '70%',
    margin: 'auto',
  },
  buttonContainer: {
    marginBottom: '8%',
    marginTop: '0.25%',
  },
  header: {
    borderTop: 'solid 1px',
    borderColor: grey[500],
  },
});
let clickClear;
export default function MessageList() {
  const [message, setMessage] = React.useState(null);
  const [isApiStarted, setIsApiStarted] = React.useState(true);
  const [api, setApi] = React.useState(new Api({
    messageCallback: (message) => {
      setMessage(message);
    },
  }));
  React.useEffect(() => {
    api.start();
  }, [api]);

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
                <Typography variant="body1" className={classes.button}>
                  {isApiStarted ? 'Stop' : 'Start'}
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => clickClear()}
              >
                <Typography variant="body1" className={classes.button}>
                  Clear
                </Typography>
              </Button>
            </Grid>
          </Grid>
          {message ? (<ErrorGrid setClear={(click) => { clickClear = click; }} message={message} priorities={[{ label: 'Error', value: 1 }, { label: 'Warning', value: 2 }, { label: 'Info', value: 3 }]} />) : null }

        </div>
      </div>
    </div>
  );
}
