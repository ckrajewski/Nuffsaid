import React from 'react'
import ErrorGrid from './ErrorGrid';
import Button from '@material-ui/core/Button'
import Api from '../api'

export default function MessageList(){
  const [message, setMessage] = React.useState(null);

   const api = new Api({
    messageCallback: (message) => {
      messageCallback(message)
    },
  })

  React.useEffect(() => {
    api.start();
  })

  const messageCallback = (message) => {
    setMessage(message);
  }

  const renderButton = () => {
    const isApiStarted = api.isStarted();
    return (
      <Button
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            api.stop()
          } else {
            api.start()
          }
           setMessage(message);
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
    )
  }


    return (
      <div>
        {renderButton()}
        {message ? <ErrorGrid message={message} priorities={[{label:'Error', value:1},{label:'Warning', value:2}, {label: 'Info', value: 3}]}/> : null }
      </div>
    )
  
}
