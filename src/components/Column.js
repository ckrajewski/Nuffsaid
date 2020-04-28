import React from 'react';
import Message from './Message';
import ColumnTitle from './ColumnTitle';

export default function Column(props) {
	const {messages, priority} = props;
	const {value, label} = priority;
	debugger;
	return(
		<div>
		<ColumnTitle priorityLabel={label} priorityValue={value} messageCount={messages.length}/>
		{messages.map(message =>(
							<Message priority={value} message={message.message} key={ value + message.message} />
							))
	}
		</div>
		)
}