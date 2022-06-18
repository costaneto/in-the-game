import React, { useEffect, useState } from "react";
import Tutors from "../../data/Tutors";
import { useParams } from "react-router-dom";
import noTutors from "../../img/no-tutors.gif";
import SearchResults from "../SearchResults";

const Search = () => {
	// Sorting tutors languages
	const sortLang = (languages) => {
		var sortedLang = "";
		for (var i = 0; i < languages.length; i++) {
			i + 1 === languages.length
				? (sortedLang += languages[i])
				: (sortedLang += `${languages[i]}, `);
		}
		return sortedLang;
	};

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
				<div className="filters">
					<h3>Filter by: </h3>
					<div className="filter-options">
						<button>Distance</button>
						<button>Price per hour</button>
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
