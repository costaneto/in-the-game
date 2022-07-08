import React, { useRef, useState, useEffect } from "react";
import Book from "./Book";
import Message from "./Message";

const TutorAction = ({ action }) => {
	const [isAction, setIsAction] = useState(false);

	let actionRef = useRef();

	// Closing current tutor action
	useEffect(() => {
		// handler will detect the click target.
		// If it isn't the current ref, then close the action
		const handler = (event) => {
			if (isAction && !actionRef.current.contains(event.target)) {
				setIsAction(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		// Remove the event listener
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [isAction]);

	const close_action = (e, action) => {
		e.preventDefault();
		if (action === "book") alert("You booked a session");
		else if (action === "message") alert("Your message was sent");
		setIsAction(false);
	};

	return (
		<>
			{action == 1 && (
				<div className="action-container" ref={actionRef}>
					<button onClick={() => setIsAction((prev) => !prev)}>Book</button>
					<Book isAction={isAction} onCloseAction={close_action} />
				</div>
			)}
			{action == 2 && (
				<div className="action-container" ref={actionRef}>
					<button onClick={() => setIsAction((prev) => !prev)}>Message</button>
					<Message isAction={isAction} onCloseAction={close_action} />
				</div>
			)}
		</>
	);
};

export default TutorAction;
