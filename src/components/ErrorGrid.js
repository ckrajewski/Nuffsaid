import React from 'react';
import Column from './Column';
import Grid from '@material-ui/core/Grid';


export default function ErrorGrid(props) {
	const {message, priorities, setClear} = props;
	const {priority} = message;
    const [filteredMessages, setFilteredMessages] = React.useState(() => (
    	priorities.reduce((filteredMessages,priority) => {
    		filteredMessages[priority.value]=[];
    		return filteredMessages;
    	},{})));
     React.useEffect(() => {
     	setFilteredMessages(Object.assign({...filteredMessages},
    		{[priority] : [message, ...filteredMessages[priority].slice()]}));
     },[message]);

    React.useEffect(() => {
     	setClear(handleClearAll);
     },[]);
   const handleClearAll = () => {
   	debugger;
   	setFilteredMessages( () => (
   		priorities.reduce((filteredMessages,priority) => {
    		filteredMessages[priority.value]=[];
    		return filteredMessages;
    	},{})));
   		
   }
   const handleClearMessage = (priority,index) => {
   	debugger;
   	let filteredMessagesByPriorityCopy = [...filteredMessages[priority]];
   	filteredMessagesByPriorityCopy.splice(index,1);
   	
   	setFilteredMessages(Object.assign({...filteredMessages},
    		{[priority] : filteredMessagesByPriorityCopy}));
   }
	return(
		<div>
		<Grid container spacing={3} justify="center">
			{
				
				priorities.map((priority,index) => (
						<Grid item xs={Math.floor(12/priorities.length)} key={priority.value}>
						
							<Column clearMessage={handleClearMessage} priority={priority} messages={filteredMessages[priority.value]} title={priority.label} />
						</Grid>

					))
				}
			
        </Grid>
        
         </div>
		)
}