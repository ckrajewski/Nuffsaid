import React from 'react';
import { Typography } from '@material-ui/core';

export default function ColumnTitle(props) {
  const { priorityLabel, priorityValue, messageCount } = props;
  return (
    <div>
      <div>
        <Typography variant="h6">
          {priorityLabel}
          {' '}
          Type
          {' '}
          {priorityValue}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          Count
          {' '}
          {messageCount}
        </Typography>
      </div>

    </div>
  );
}
