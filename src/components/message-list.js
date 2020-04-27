import React, { Component } from 'react'
import ErrorGrid from './ErrorGrid';
import Button from '@material-ui/core/Button'
import Api from '../api'

class MessageList extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    }, () => {
      // Included to support initial direction. Please remove upon completion
      console.log(messages)
    })
  }

  renderButton() {
    const isApiStarted = this.api.isStarted()
    return (
      <Button
        variant="contained"
        onClick={() => {
          if (isApiStarted) {
            this.api.stop()
          } else {
            this.api.start()
          }
          this.forceUpdate()
        }}
      >
        {isApiStarted ? 'Stop Messages' : 'Start Messages'}
      </Button>
    )
  }

  render() {
    const { messages } = this.state
    return (
      <div>
        {this.renderButton()}
        <ErrorGrid messages={messages} priorities={[1,2,3]}/>
      </div>
    )
  }
}

export default MessageList
