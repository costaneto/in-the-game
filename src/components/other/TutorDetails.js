import React from "react";
import { detailIcons } from "../../data/Data";

const TutorDetails = ({
	isPopup,
	picture,
	rating,
	name,
	hobby,
	price,
	languages,
	distance,
}) => {
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

	return (
		<>
			<img className="tutor-profile_picture" src={picture} />
			<div className="tutor-details">
				<div className="name-and-rating">
					<p className="tutor-name">
						<span className="bold-span">{name}</span>
						<span className="detail-span">{rating}</span>
					</p>
					<img className="rating-star" src={detailIcons.star} />
				</div>
				<div className="remaining-details">
					<div className="detail hobby">
						<img src={detailIcons.hobby} />
						<p className="tutor-hobby">
							<span className="detail-span">{hobby}</span>
						</p>
					</div>
					<div className="detail price'">
						<img src={detailIcons.euro} />
						<p className="tutor-price">
							<span className="detail-span">{`${price}€/h`}</span>
						</p>
					</div>
					<div className="detail languages">
						<img src={detailIcons.languages} />
						<p className="tutor-languages">
							<span className="detail-span">{sortLang(languages)}</span>
						</p>
					</div>
					<div className="detail distance">
						<img src={detailIcons.location} />
						<p className="tutor-distance">
							<span className="detail-span">{`${distance}km`}</span>
						</p>
					</div>
				</div>
				{isPopup && (
					<div className="tutor-action">
						<div>
							<button>Book</button>
						</div>
						<div>
							<button>Message</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default TutorDetails;
