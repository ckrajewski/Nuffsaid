import React from 'react'
import ErrorGrid from './ErrorGrid';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Api from '../api'
import { StyleSheet, css } from 'aphrodite';
import { Typography } from '@material-ui/core';


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#88FCA3',
      textTransform:'uppercase',
      fontWeight: 'bold',
    },
    container: {
      width:'70%',
      margin:'auto',
    },
    buttonContainer: {
      marginBottom: '8%',
      marginTop:'0.25%',
    },
    header: {
      borderTop: 'solid 1px',
    }
  });  

export default function MessageList(){
  const [message, setMessage] = React.useState(null);   
  const [isApiStarted, setIsApiStarted] = React.useState(true);   
  const [api, setApi] = React.useState(new Api({
    messageCallback: (message) => {
      setMessage(message);
    
    },
  }));   
  React.useEffect(() => {
    api.start();
  },[api])

 const handleApiButton = () => {
     if (isApiStarted) {
            api.stop()
          } else {
            api.start()
          }
           setIsApiStarted(!isApiStarted);
  }


    return (
      <div className={css(styles.header)}>
      <div className={css(styles.container)}>
          <Grid container spacing={3} justify="center" className={css(styles.buttonContainer)}>
            <Grid item>

        <Button
        variant="contained"
        className={css(styles.button)}
        onClick={handleApiButton}>
                <Typography variant="body1" className={css(styles.button)}>
        {isApiStarted ? 'Start' : 'Stop'}
        </Typography>
        </Button>
        </Grid>
        <Grid item>
        <Button
        className={css(styles.button)}
        variant="contained">
        <Typography variant="body1" className={css(styles.button)}>
        Clear
        </Typography>
        </Button>
        </Grid>
        </Grid>
        {message ? (<ErrorGrid message={message} priorities={[{label:'Error', value:1},{label:'Warning', value:2}, {label: 'Info', value: 3}]}/>) :null }
        
      </div>
      </div>
    )
  
}
