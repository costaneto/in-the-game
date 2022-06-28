import React from "react";
import noTutors from "../../img/no-tutors.gif";

const NoTutors = () => {
	return (
		<div className="no-tutor-container">
			<div className="no-tutor-img">
				<img src={noTutors} />
			</div>
			<p>No tutors available.</p>
		</div>
	);
};

export default NoTutors;
