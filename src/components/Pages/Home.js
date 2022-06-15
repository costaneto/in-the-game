import React, { useState, useEffect } from "react";
import searchIcon from "../../img/search_white.png";
import back_img from "../../img/back-img.png";
import Hobbies from "../../data/Hobbies";
import { useNavigate } from "react-router-dom";

const Home = () => {
	// (1) Changing image
	const [currentImg, setCurrentImg] = useState(0);
	const hobbiesLength = Hobbies.length;
	let slideInterval;

	const auto = () => {
		slideInterval = setInterval(nextImg, 6000);
	};

	const nextImg = () => {
		setCurrentImg(currentImg === hobbiesLength - 1 ? 0 : currentImg + 1);
	};

	// animation loop
	useEffect(() => {
		if (true) {
			auto();
		}
		return () => clearInterval(slideInterval);
	});
	// (1) Changing image END

	// (2) Searching
	const [searchKey, setSearchKey] = useState("");
	let navigate = useNavigate();

	const performSearch = (e) => {
		e.preventDefault();
		navigate(`/search/${searchKey}`, { replace: true });
		setSearchKey("");
	};
	// (2) Searching END

	return (
		<div className="container">
			<div className="left-side">
				<h1>
					The all-in-one <span id="marketplace-span">marketplace</span>
					<br />
					to explore <span id="hobbies-span">hobbies</span>
				</h1>
				<h5>
					Connect - <span id="learn-span">Learn</span> - Upskill
				</h5>
				<div className="search-bar">
					<p>What would you like to learn?</p>
					<form className="search-form" onSubmit={performSearch}>
						<input
							type="text"
							value={searchKey}
							placeholder="e.g. Photography"
							onChange={(e) => setSearchKey(e.target.value)}
							className="search_input"
						/>
						<button type="submit" className="search_button">
							<img src={searchIcon} />
						</button>
					</form>
				</div>
				<div className="popular-searches_container">
					<p>Popular Searches</p>
					<div className="popular-searches">
						<a
							href="/search/baking"
							className="popular-search_item"
							id="baking"
						>
							Baking
						</a>
						<a href="/search/music" className="popular-search_item" id="music">
							Music
						</a>
						<a
							href="/search/gardening"
							className="popular-search_item"
							id="gardening"
						>
							Gardening
						</a>
						<a href="/search/yoga" className="popular-search_item" id="yoga">
							Yoga
						</a>
					</div>
				</div>
			</div>
			<div className="right-side">
				<div className="image-container">
					<img id="back-img" src={back_img} />
					{Hobbies.map((hobby, index) => {
						return (
							<img
								key={hobby.name}
								src={hobby.img}
								className={
									index === currentImg ? "front-img current" : "front-img"
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
