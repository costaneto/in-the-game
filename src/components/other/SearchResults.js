import React from "react";
import { useState } from "react";

const SearchResults = ({ keyword, tutors, filterValues }) => {
	// Filter tutors
	const filterCondition = (tutor) => {
		if (filterValues.distance == "all" && filterValues.price == "all") {
			return tutor.hobby.includes(keyword);
		} else if (filterValues.distance != "all" && filterValues.price == "all") {
			return (
				tutor.hobby.includes(keyword) && tutor.distance <= filterValues.distance
			);
		} else if (filterValues.distance == "all" && filterValues.price != "all") {
			return tutor.hobby.includes(keyword) && tutor.price <= filterValues.price;
		} else {
			return (
				tutor.hobby.includes(keyword) &&
				tutor.distance <= filterValues.distance &&
				tutor.price <= filterValues.price
			);
		}
	};

	// Sorting tutor's language.
	// Add language to sortedLang variable with comma.
	// It doesn't add the comma if it is the last language
	const sortLang = (languages) => {
		var sortedLang = "";
		for (var i = 0; i < languages.length; i++) {
			i + 1 === languages.length
				? (sortedLang += languages[i])
				: (sortedLang += `${languages[i]}, `);
		}
		return sortedLang;
	};

	// Details for the popup.
	// The popup will appear if the user
	// clicks on one of the tutors cards.
	const [popup, setPopup] = useState({
		showing: false,
		name: "",
		picture: undefined,
		hobby: "",
		about: "",
		distance: 0,
		price: 0,
		languages: [],
	});

	const showPopup = (tutor) => {
		setPopup({
			showing: true,
			name: tutor.name,
			picture: tutor.picture,
			hobby: tutor.hobby,
			about: tutor.about,
			distance: tutor.distance,
			price: tutor.price,
			languages: tutor.languages,
		});
	};

	const closePopup = () => {
		setPopup({ ...popup, showing: false });
	};

	return (
		<>
			{/* Tutors cards */}
			<div className="search-results">
				{tutors
					.filter((tutor) => filterCondition(tutor))
					.map((tutor) => {
						return (
							<div
								key={tutor.id}
								className={`tutor number-${tutor.id}`}
								onClick={() => showPopup(tutor)}
							>
								<img className="tutor-profile_picture" src={tutor.picture} />
								<div className="tutor-details">
									<p className="tutor-name">
										Name: <span className="detail-span">{tutor.name}</span>
									</p>
									<p className="tutor-hobby">
										Teaches: <span className="detail-span">{tutor.hobby}</span>
									</p>
									<p className="tutor-distance">
										Distance:{" "}
										<span className="detail-span">{`${tutor.distance}km`}</span>
									</p>
									<p className="tutor-price">
										Price:{" "}
										<span className="detail-span">{`${tutor.price}€/h`}</span>
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

			{/* Show popup */}
			{popup.showing && (
				<div className="popup-container">
					<div className="popup-info">
						{popup.name}
						{popup.pic}
						{popup.hobby}
						{popup.about}
						{popup.distance}
						{popup.price}
						{sortLang(popup.languages)}
					</div>
					<div className="dark-background" onClick={closePopup}></div>
				</div>
			)}
		</>
	);
};

export default SearchResults;
