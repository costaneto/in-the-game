import React, { useRef, useState, useEffect } from "react";

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

	return (
		<>
			{action == 1 && (
				<div className="action-container" ref={actionRef}>
					<button onClick={() => setIsAction((prev) => !prev)}>Book</button>
					{isAction && <div className="action">Book Menu</div>}
				</div>
			)}
			{action == 2 && (
				<div className="action-container" ref={actionRef}>
					<button onClick={() => setIsAction((prev) => !prev)}>Message</button>
					{isAction && <div className="action">Message Menu</div>}
				</div>
			)}
		</>
	);
};

export default TutorAction;
