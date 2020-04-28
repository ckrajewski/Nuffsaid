import React from 'react'
import ErrorGrid from './ErrorGrid';
import Button from '@material-ui/core/Button'
import Api from '../api'

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

 const renderButton = () => {
    return (
      <Button
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            api.stop()
          } else {
            api.start()
          }
           setIsApiStarted(!isApiStarted);
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
    )
  }


    return (
      <div>
        {renderButton()}
        {message ? (<ErrorGrid message={message} priorities={[{label:'Error', value:1},{label:'Warning', value:2}, {label: 'Info', value: 3}]}/>) :null }
        
      </div>
    )
  
}
