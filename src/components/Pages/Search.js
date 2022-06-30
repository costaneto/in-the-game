import React, { useEffect, useState } from "react";
import { Tutors, Filters } from "../../data/Data";
import { useParams } from "react-router-dom";
import SearchResults from "../other/SearchResults";
import Filter from "../other/Filter";
import NoTutors from "../other/NoTutors";

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

	// Filter defaults values
	const [filterValues, setFilterValues] = useState({
		distance: "all",
		price: "all",
	});

	// Change filter values
	const changeFilterValues = (e) => {
		setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
	};

	return (
		<div className="search-container">
			<div className="search-nav">
				<h3>
					Results for: <span id="search-keyword">{hobby}</span>{" "}
				</h3>
				<div className="filter-container">
					<ul className="filter-menu">
						{Filters.map((filter, index) => {
							return (
								<Filter
									key={index}
									filter={filter}
									onChangeFilterValues={changeFilterValues}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			{isMatch ? (
				<SearchResults
					keyword={keyword}
					tutors={Tutors}
					filterValues={filterValues}
				/>
			) : (
				<NoTutors />
			)}
		</div>
	);
};

export default Search;
