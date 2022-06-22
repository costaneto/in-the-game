import React, { useEffect, useState } from "react";
import { Tutors, Filters } from "../../data/Data";
import { useParams } from "react-router-dom";
import noTutors from "../../img/no-tutors.gif";
import SearchResults from "../SearchResults";

const Search = () => {
	// Getting search keyword
	let { hobby } = useParams();
	const keyword = hobby.toLocaleLowerCase();

	// Check whether there are tutors for the hobby
	const [isMatch, setIsMatch] = useState(false);

	useEffect(() => {
		Tutors.forEach((tutor) => {
			if (tutor.hobby.includes(keyword)) {
				setIsMatch(!isMatch);
				return;
			}
		});
	}, []);

	// Filters
	const [showFilterOpt, setShowFilterOpt] = useState(false);

	console.log(showFilterOpt);

	return (
		<div className="search-container">
			<div className="search-nav">
				<h3>
					Results for: <span id="search-keyword">{hobby}</span>{" "}
				</h3>
				<div className="filters">
					<h3>Filter by: </h3>
					<div className="filter-buttons">
						{Filters.map((filter) => {
							return (
								<div key={filter.id} className="filter-button-container">
									<button
										className="filter-button"
										onClick={() => {
											setShowFilterOpt(!showFilterOpt);
											console.log(showFilterOpt);
										}}
									>
										<p>{filter.filterName}</p>
										<div className="dropdown-arrow"></div>
									</button>
									<div className="filter-options">
										{filter.options.map((option) => {
											return (
												<div key={option.id} className={"filter-option"}>
													<input
														type="checkbox"
														name={filter.filterName}
														value={option.optVal}
													/>
													<label>{option.optVal}</label>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{isMatch ? (
				<SearchResults keyword={keyword} tutors={Tutors} />
			) : (
				<div className="no-tutor-container">
					<div className="no-tutor-img">
						<img src={noTutors} />
					</div>
					<p>No tutors for your hobby yet.</p>
				</div>
			)}
		</div>
	);
};

export default Search;
