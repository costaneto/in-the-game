import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import ErrorPage from "./components/Pages/Error";
import logo from "./img/logo.png";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";

function App() {
	const [searchKey, setSearchKey] = useState("");

	return (
		<div className="App">
			<Router>
				<div className="pseudo-nav"></div>
				<nav className="navbar">
					<Link to="/">
						<div className="navbar_logo">
							<img src={logo} alt="logo" />
						</div>
					</Link>
					<div className="navbar_links">
						<Link to="/login">Login</Link>
						<Link to="/signup" id="signup">
							Sign up
						</Link>
					</div>
				</nav>
				<Routes>
					<Route path="/" element={<Home search={setSearchKey} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/search/:hobby"
						element={<Search searchTarget={searchKey} />}
					/>
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
