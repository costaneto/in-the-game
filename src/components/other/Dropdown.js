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

	return (
		<div className={`dropdown${dropdown ? " show" : ""}`}>
			<label key="all">
				<input
					type="radio"
					name={inputNameLower}
					value="all"
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
		</div>
	);
};

export default Dropdown;
