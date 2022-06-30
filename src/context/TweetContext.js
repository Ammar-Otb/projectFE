import React from "react";
import { useState, createContext } from "react";
const TweetContext = createContext();
export const TweetProvider = ({ children }) => {
	const [tweetList, setTweetList] = useState([]);
	const request = async () => {
		const response = await fetch("http://localhost:8080/api/v1/tweet");
		const tweetList = await response.json();
		if (!response) {
			alert("STOP");
		}
		setTweetList(tweetList);
	};
	return (
		<TweetContext.Provider value={{ request, tweetList, setTweetList }}>
			{children}
		</TweetContext.Provider>
	);
};

export default TweetContext;
