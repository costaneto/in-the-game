import React from "react";

const Dropdown = ({
	dropdown,
	options,
	inputName,
	unit,
	changeFilterValues,
}) => {
	// key values
	const optionAll = "all";
	const lastOption = "last-option";

	// use label key (all, last-option) to perform operations

	return (
		<div className={`dropdown${dropdown ? " show" : ""}`}>
			<label key={optionAll}>
				<input
					type="radio"
					name={inputName}
					value={optionAll}
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
			<label key={lastOption}>
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
