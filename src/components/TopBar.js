import React from "react";

const TopBar = ({ title }) => {
	return (
		<div className="topbar">
			<nav className="navbar">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1 text-white">{title}</span>
				</div>
			</nav>
		</div>
	);
};

export default TopBar;
