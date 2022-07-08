import React from "react";

const Message = ({ isAction, onCloseAction }) => {
	return (
		<div className={`action${isAction ? " show" : ""}`} id="action_message">
			<form
				className="message-form"
				onSubmit={(e) => onCloseAction(e, "message")}
			>
				<p>What's your name?</p>
				<input type="text" placeholder="name" />
				<p>Type your message</p>
				<textarea placeholder="message" />
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Message;
