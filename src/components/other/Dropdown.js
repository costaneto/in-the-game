import React from "react";

const Dropdown = ({
	dropdown,
	options,
	inputName,
	unit,
	onChangeFilterValues,
}) => {
	// key values
	const inputNameLower = inputName.toLocaleLowerCase();
	const optionAll = "all";
	const lastOption = "last-option";

	// use label key (all, last-option) to perform operations

	return (
		<div className={`dropdown${dropdown ? " show" : ""}`}>
			<label key={optionAll}>
				<input
					type="radio"
					name={inputNameLower}
					value={optionAll}
					defaultChecked={true}
					onChange={onChangeFilterValues}
				/>
				All
			</label>
			{options.map((option) => {
				return (
					<label key={option.id}>
						<input
							type="radio"
							name={inputNameLower}
							value={option.optVal}
							onChange={onChangeFilterValues}
						/>
						<span>&#60; </span>
						{`${option.optVal} ${unit}`}
					</label>
				);
			})}
			<label key={lastOption}>
				<input
					type="radio"
					name={inputNameLower}
					value={options[options.length - 1].optVal}
					onChange={onChangeFilterValues}
				/>
				<span>+ </span>
				{`${options[options.length - 1].optVal} ${unit}`}
			</label>
		</div>
	);
};

export default Dropdown;
