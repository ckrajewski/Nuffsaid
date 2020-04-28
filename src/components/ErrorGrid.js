import React from 'react';
import Column from './Column';
import Grid from '@material-ui/core/Grid';


export default function ErrorGrid(props) {
	const {message, priorities} = props;
	const {priority} = message;
    const [filteredMessages, setFilteredMessages] = React.useState(() => (
    	priorities.reduce((filteredMessages,priority) => {
    		filteredMessages[priority.value]=[];
    		return filteredMessages;
    	},{})));
    	
    const createFilteredMessages = () => {
    	let test = Object.assign(filteredMessages,
    		{[priority] : [message, ...filteredMessages[priority].slice()]})
    	setFilteredMessages(Object.assign(filteredMessages,
    		{[priority] : [message, ...filteredMessages[priority].slice()],
    			lastMessage : message}));
    } 
    const isSameMessage = () => {
  const messageKeys = Object.keys(message);
  for (const index in messageKeys) {
    const key = messageKeys[index];
    if (message[key] !== filteredMessages.lastMessage[key]) {
      return false;
    }
  }
  return true;
}
	if(!filteredMessages.lastMessage || !isSameMessage()) {
		createFilteredMessages();
	}
	debugger;
	return(
		<div style={{width:'70%', margin:'auto'}}>
		<Grid container spacing={3} justify="center">
			{
				
				priorities.map((priority,index) => (
						<Grid item xs={Math.floor(12/priorities.length)} key={priority.value}>
						
							<Column priority={priority} messages={filteredMessages[priority.value]} title={priority.label} />
						</Grid>

					))
				}
			
        </Grid>
        
         </div>
		)
}