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
    	},{lastMessage:{}})));
     React.useEffect(() => {
     	setFilteredMessages(Object.assign(filteredMessages,
    		{[priority] : [message, ...filteredMessages[priority].slice()],
    			lastMessage : message}));
     },[message]);
    
   
	debugger;
	return(
		<div>
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