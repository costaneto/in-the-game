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
						{`${option.optVal} ${unit}`}
					</label>
				);
			})}
		</div>
	);
};

export default Dropdown;
