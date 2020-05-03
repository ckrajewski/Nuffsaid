import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from './Column';

/**
* MessageGrid component renders the column grids
* Error, Warning, and Info (depending on values passed in by the
* prioirities prop)
*/
export default function MessageGrid(props) {
  const { message, priorities, setClear } = props;
  const { priority } = message;

  /**
  * defaults filteredMessages to an object, where each key
  * is a given priority type. This is also how each column
  * is rendered (each column is rendered by prioirty type)
  */
  const initializeFilteredMessages = () => (
    priorities.reduce((filteredMessages, priority) => {
      filteredMessages[priority.value] = [];
      return filteredMessages;
    }, {}));

  /**
  * filtered messages is a state variable responsible for storing our
  * messages that are already filtered by error type
  */
  const [filteredMessages, setFilteredMessages] = useState(() => initializeFilteredMessages());

  /**
  * everytime a new message comes in, add it
  * to the appropriate column (priority type)
  */
  useEffect(() => {
    setFilteredMessages({
      ...filteredMessages,
      [priority]: [message, ...filteredMessages[priority].slice()],
    });
  }, [message]);

  /**
  * clear all messages by re-initializing the state of filteredMessages object
  */
  const handleClearAll = () => setFilteredMessages(initializeFilteredMessages());

  /**
  * intialize higher order function setClear
  * to take handleClearAll as its argument
  */
  useEffect(() => {
    setClear(handleClearAll);
  }, []);

  /**
  * removes given message from the array by its index
  */
  const handleClearMessage = (priority, index) => {
    const filteredMessagesByPriorityCopy = [...filteredMessages[priority]];
    filteredMessagesByPriorityCopy.splice(index, 1);
    setFilteredMessages({
      ...filteredMessages,
      [priority]: filteredMessagesByPriorityCopy,
    });
  };

  return (
    <div>
      <Grid container spacing={2} justify="center">
        {
            priorities.map((priority) => (
              <Grid item xs={Math.floor(12 / priorities.length)} key={priority.value}>
                <Column
                  clearMessage={handleClearMessage}
                  priority={priority}
                  messages={filteredMessages[priority.value]}
                  title={priority.label}
                />
              </Grid>

            ))
        }
      </Grid>
    </div>
  );
}
