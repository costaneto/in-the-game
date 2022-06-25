import React, { useEffect, useState } from "react";
import { Tutors, Filters } from "../../data/Data";
import { useParams } from "react-router-dom";
import noTutors from "../../img/no-tutors.gif";
import SearchResults from "../other/SearchResults";
import Dropdown from "../other/Dropdown";
import Filter from "../other/Filter";

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

	return (
		<div className="search-container">
			<div className="search-nav">
				<h3>
					Results for: <span id="search-keyword">{hobby}</span>{" "}
				</h3>
				<div className="filter-container">
					<h3>Filter by: </h3>
					<ul className="filter-menu">
						{Filters.map((filter, index) => {
							return <Filter key={index} filter={filter} />;
						})}
					</ul>
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
