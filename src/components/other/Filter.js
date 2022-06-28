import React, { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

const Filter = ({ filter, onChangeFilterValues }) => {
	const [isDropdown, setIsDropdown] = useState(false);

	// ref is used to know which dropdown
	// we are displaying or hiding
	let ref = useRef();

	// Closing current dropdown
	useEffect(() => {
		// handler will detect the click target.
		// If it isn't the current ref, then close the dropdown
		const handler = (event) => {
			if (isDropdown && !ref.current.contains(event.target)) {
				setIsDropdown(false);
			}
		};

		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);

		// Remove the event listener
		return () => {
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [isDropdown]);

	return (
		<li className="filter-item" ref={ref}>
			<>
				<button type="button" onClick={() => setIsDropdown((prev) => !prev)}>
					<p>{filter.name}</p>
				</button>
				<Dropdown
					dropdown={isDropdown}
					options={filter.options}
					inputName={filter.name}
					unit={filter.unit}
					onChangeFilterValues={onChangeFilterValues}
				/>
			</>
		</li>
	);
};

export default Filter;
