import React from 'react';
import Message from './Message';
import ColumnTitle from './ColumnTitle';

export default function Column(props) {
	const {messages, priority, clearMessage} = props;
	const {value, label} = priority;
	return(
		<div>
		<ColumnTitle priorityLabel={label} priorityValue={value} messageCount={messages.length}/>
		{messages.map((message,index) =>(
							<Message clearMessage={() => clearMessage(value,index)} priority={value} message={message.message} />
							))
	}
		</div>
		)
}