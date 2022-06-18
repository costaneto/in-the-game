import React from "react";
import { useState } from "react";

const SearchResults = ({ keyword, tutors }) => {
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

	// Popup with more info
	const [isMoreInfo, setIsMoreInfo] = useState(false);
	const [popupName, setPopupName] = useState("");
	const [popupPic, setPopupPic] = useState(undefined);
	const [popupHobby, setPopupHobby] = useState("");
	const [popupAbout, setPopupAbout] = useState("");
	const [popupDist, setPopupDist] = useState("");
	const [popupPrice, setPopupPrice] = useState("");
	const [popupLang, setPopupLang] = useState([]);

	const showPopup = (
		name,
		picture,
		hobby,
		about,
		distance,
		price,
		languages
	) => {
		setIsMoreInfo(!isMoreInfo);
		setPopupName(name);
		setPopupPic(picture);
		setPopupHobby(hobby);
		setPopupAbout(about);
		setPopupDist(distance);
		setPopupPrice(price);
		setPopupLang(languages);
		console.log("clicked");
	};

	console.log(isMoreInfo);

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
								onClick={showPopup}
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
			{isMoreInfo && (
				<div className="popup-container">
					<div className="popup-info"></div>
					<div className="dark-background"></div>
				</div>
			)}
		</>
	);
};

export default SearchResults;
