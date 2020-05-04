import React from 'react';
import { Typography } from '@material-ui/core';

/**
  * ColumnTitle component renders the tile for each column
  * Shows prioirty name (i.e. error or warning) as well as the number
  * of messages
*/
export default function ColumnTitle(props) {
  const { priorityLabel, priorityValue, messageCount } = props;
  return (
    <div>
      <div>
        <Typography variant="h6">
          {`${priorityLabel} Type ${priorityValue}`}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          {`Count ${messageCount}`}
        </Typography>
      </div>
    </div>
  );
}
