import React, { useState } from "react";

const Message = ({ isAction, onCloseAction }) => {
	const submit = (e) => {
		onCloseAction(e, "message");
	};

	return (
		<div className={`action${isAction ? " show" : ""}`} id="action_message">
			<form className="message-form" onSubmit={(e) => submit(e)}>
				<p>Your name</p>
				<div className="message-name">
					<input type="text" placeholder="name" />
				</div>
				<p>Say something</p>
				<div className="message-text">
					<textarea placeholder="message" />
				</div>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Message;
