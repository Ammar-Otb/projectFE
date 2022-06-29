import { VStack } from "@chakra-ui/react";
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
} from "react-router-dom";
const Help = () => {
	const linkStyle = {
		textDecoration: "none",
		color: "black",
		fontSize: "20px",
		fontFamily: "sans-serif",
	};
	return (
		<>
			<div className="help-container">
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<Link className="navbar-brand" to="/home">
							Twuttor
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<Link to="/home" style={linkStyle}>
									Home
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div className="container ">
				<div className="bg">
					<section className="card">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
							<p className="card-text">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
							<a href="#" className="card-link">
								Live Chat
							</a>
							<a href="#" className="card-link">
								Call Us
							</a>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Help;
