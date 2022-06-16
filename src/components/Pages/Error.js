import React from "react";
import notFoundColor from "../../img/404_color.png";

const Error = () => {
	return (
		<div className="error-container">
			<h3>Page not found</h3>
			<div className="error-img">
				<img src={notFoundColor} />
			</div>
			<p>The page you're looking for doesn't exist.</p>
		</div>
	);
};

export default Error;
