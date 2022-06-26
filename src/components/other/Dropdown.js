import React from "react";
import { FilterUnits } from "../../data/Data";

const Dropdown = ({ dropdown, options, inputName }) => {
	// Getting the right unit to be displayed
	let unit = "";
	FilterUnits.forEach((filterUnit) => {
		if (inputName === filterUnit.name) {
			unit = filterUnit.unit;
		}
	});

	// use label key (all, last-option) to perform operations

	return (
		<div className={`dropdown${dropdown ? " show" : ""}`}>
			<label key="all">
				<input
					type="radio"
					name={inputName}
					value="all"
					defaultChecked={true}
				/>
				All
			</label>
			{options.map((option) => {
				return (
					<label key={option.id}>
						<input type="radio" name={inputName} value={option.optVal} />
						<span>&#60; </span>
						{`${option.optVal} ${unit}`}
					</label>
				);
			})}
			<label key="last-option">
				<input
					type="radio"
					name={inputName}
					value={options[options.length - 1].optVal}
				/>
				<span>+ </span>
				{`${options[options.length - 1].optVal} ${unit}`}
			</label>
		</div>
	);
};

export default Dropdown;
