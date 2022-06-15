import React from "react";
import Tutors from "../../data/Tutors";
import { useParams } from "react-router-dom";

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
			<div className="search-results">
				{Tutors.filter((tutor) => tutor.hobby === hobby).map((tutor) => {
					return (
						<div key={tutor.id} className={`tutor number-${tutor.id}`}>
							<img className="tutor-profile_picture" src={tutor.picture} />
							<div className="tutor-details">
								<p className="tutor-name">
									Name: <span className="detail-span">{tutor.name}</span>
								</p>
								<p className="tutor-distance">
									Distance:{" "}
									<span className="detail-span">{`${tutor.distance}km`}</span>
								</p>
								<p className="tutor-price">
									Price:{" "}
									<span className="detail-span">{`${tutor.price}€`}</span>
								</p>
								<p className="tutor-languages">
									Speaks:{" "}
									<span className="detail-span">
										{sortLang(tutor.languages)}
									</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Search;
