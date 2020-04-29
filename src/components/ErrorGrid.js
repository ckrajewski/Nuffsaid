import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Column from './Column';

export default function ErrorGrid(props) {
  const { message, priorities, setClear } = props;
  const { priority } = message;

  const initializeFilteredMessages = () => (
    priorities.reduce((filteredMessages, priority) => {
      filteredMessages[priority.value] = [];
      return filteredMessages;
    }, {}));

  const [filteredMessages, setFilteredMessages] = useState(() => initializeFilteredMessages());

  useEffect(() => {
    setFilteredMessages({
      ...filteredMessages,
      [priority]: [message, ...filteredMessages[priority].slice()],
    });
  }, [message]);

  const handleClearAll = () => setFilteredMessages(initializeFilteredMessages());

  useEffect(() => {
    setClear(handleClearAll);
  }, []);

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
