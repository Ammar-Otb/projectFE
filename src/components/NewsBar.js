import React, { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
const NewsBar = () => {
	const [newsList, setNewsList] = useState([]);
	useEffect(() => {
		const news = async () => {
			const request = await fetch(
				"https://newsapi.org/v2/top-headlines?country=us&apiKey=26f9c52edf4c460db1ea89d467fd7df7"
			);
			const data = await request.json();
			setNewsList([
				data["articles"][0],
				data["articles"][1],
				data["articles"][2],
			]);
		};
		news();
		// console.log(newsList[0].urlToImage);
	}, []);

	return (
		<>
			<ul className="list-group">
				{newsList.map((news, index) => {
					return (
						<li key={index} className="list-group-item text-light">
							<div className="card">
								<img
									src={`${news.urlToImage}`}
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{news.title}</h5>
									<p className="card-text">{news.description}</p>
									<a href={`${news.url}`}>Full Article</a>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default NewsBar;
