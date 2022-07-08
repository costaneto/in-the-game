import React from "react";
import calendar from "../../img/calendar.png";

const Book = ({ isAction, onCloseAction }) => {
	return (
		<div className={`action${isAction ? " show" : ""}`}>
			<p className="month">November 2022</p>
			<div className="book-calendar">
				<img src={calendar} />
			</div>
			<div>
				<button onClick={(e) => onCloseAction(e, "book")}>OK</button>
			</div>
		</div>
	);
};

export default Book;
