import React from "react";
import { useState } from "react";
import TutorDetails from "./TutorDetails";

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

	// Details for the popup.
	// The popup will appear if the user
	// clicks on one of the tutors cards.
	const [popup, setPopup] = useState({
		showing: false,
		picture: undefined,
		rating: 0,
		name: "",
		hobby: "",
		about: "",
		distance: 0,
		price: 0,
		languages: [],
	});

	const showPopup = (tutor) => {
		setPopup({
			showing: true, // show popup
			picture: tutor.picture,
			rating: tutor.rating,
			name: tutor.name,
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
								className="tutor"
								onClick={() => showPopup(tutor)}
							>
								<TutorDetails
									picture={tutor.picture}
									rating={tutor.rating}
									name={tutor.name}
									hobby={tutor.hobby}
									price={tutor.price}
									languages={tutor.languages}
									distance={tutor.distance}
								/>
							</div>
						);
					})}
			</div>

			{/* Show popup */}
			{popup.showing && (
				<div className="popup-container">
					<div className="popup-info">
						<div className="tutor">
							<TutorDetails
								picture={popup.picture}
								rating={popup.rating}
								name={popup.name}
								hobby={popup.hobby}
								price={popup.price}
								languages={popup.languages}
								distance={popup.distance}
							/>
						</div>
					</div>
					<div className="dark-background" onClick={closePopup}></div>
				</div>
			)}
		</>
	);
};

export default SearchResults;
