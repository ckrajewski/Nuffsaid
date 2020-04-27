import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function ErrorGrid(props) {
	const {messages, priorities} = props;
    const [filteredMessages, setFilteredMessages] = React.useState(() => {
    	const fm = priorities.reduce((filteredMessages,priority) => {
    		filteredMessages[priority]=[];
    		return filteredMessages;
    	},{});
    	return {messages: fm, messagesLength: 0};
    });
    const lastMessage = messages[messages.length - 1];
    const createFilteredMessages = () => {
    	const { message, priority} = lastMessage;
    	let filteredMessagesDeepCopy = {...filteredMessages.messages};
    	if(!filteredMessagesDeepCopy.hasOwnProperty(priority)) {
    		filteredMessagesDeepCopy[priority] = [];
    	}
    	filteredMessagesDeepCopy[priority].push(message);
    	setFilteredMessages((prevState => {
    		return ( {
    			...prevState,
    			messages: filteredMessagesDeepCopy,
    			messagesLength: ++prevState.messagesLength
    		})
    	}),);
    } 
	debugger;
	if(messages.length > filteredMessages.messagesLength) {
		createFilteredMessages();
	}
	const classes = useStyles();
	return(
		<div>
		<Grid container spacing={3}>
			{
				
				priorities.map(priority => (
						<Grid xs={Math.floor(12/priorities.length)}>
						{filteredMessages.messages[priority].map(message =>(
							<Message priority={priority} message={message} />
							))
					}</Grid>

					))
				}
			}
        </Grid>
        
         </div>
		)
}