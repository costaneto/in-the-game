import React, { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

const Filter = ({ filter }) => {
	const [isDropdown, setIsDropdown] = useState(false);

	// ref is used to know which dropdown
	// we are displaying or hiding
	let ref = useRef();

	// Mousedowns or touching events on the page.
	// Allows hiding of current opened dropdown
	useEffect(() => {
		// A dropdown is open. The handler gets the
		// mousedown event
		const handler = (event) => {
			if (isDropdown && !ref.current.contains(event.target)) {
				setIsDropdown(false);
			}
		};		

		// This will listen for mousedown or touch events
		// when dropdown is visble
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		// Cleanup the event listener
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [isDropdown]);

	return (
		<li className="filter-item" ref={ref}>
			<>
				<button type="button">{filter.namen}</button>
				<Dropdown dropdown={isDropdown} />
			</>
		</li>
	);
};

export default Filter;
