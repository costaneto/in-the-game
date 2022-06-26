import React from "react";
import { useState } from "react";

const SearchResults = ({ keyword, tutors, filterValues }) => {
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
	const [isPopup, setIsPopup] = useState(false);
	const [popupName, setPopupName] = useState("");
	const [popupPic, setPopupPic] = useState(undefined);
	const [popupHobby, setPopupHobby] = useState("");
	const [popupAbout, setPopupAbout] = useState("");
	const [popupDist, setPopupDist] = useState("");
	const [popupPrice, setPopupPrice] = useState("");
	const [popupLang, setPopupLang] = useState([]);

	const showPopup = (tutor) => {
		setIsPopup(!isPopup);
		setPopupName(tutor.name);
		setPopupPic(tutor.picture);
		setPopupHobby(tutor.hobby);
		setPopupAbout(tutor.about);
		setPopupDist(tutor.distance);
		setPopupPrice(tutor.price);
		setPopupLang(tutor.languages);
	};

	const closePopup = () => {
		setIsPopup(!isPopup);
	};

	return (
		<>
			<div className="search-results">
				{tutors
					.filter((tutor) => tutor.hobby.includes(keyword))
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
			{isPopup && (
				<div className="popup-container">
					<div className="popup-info">
						{/* {popupName}
						{popupPic}
						{popupHobby}
						{popupAbout}
						{popupDist}
						{popupPrice}
						{popupLang} */}
					</div>
					<div className="dark-background" onClick={closePopup}></div>
				</div>
			)}
		</>
	);
};

export default SearchResults;
