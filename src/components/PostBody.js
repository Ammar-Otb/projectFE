import React from "react";
import { useState, useEffect, useContext } from "react";
import {
	List,
	ListItem,
	ListIcon,
	OrderedList,
	UnorderedList,
	Box,
	Flex,
	Text,
	VStack,
	HStack,
	Image,
	Button,
} from "@chakra-ui/react";
import CommentModal from "./CommentModal";
import TweetContext from "../context/TweetContext";

const PostBody = () => {
	const onClickDelete = async (id) => {
		await fetch("http://localhost:8080/api/v1/tweet/" + `${id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});
	};
	// const [tweetList, setTweetList] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	// const request = async () => {
	// 	const response = await fetch("http://localhost:8080/api/v1/tweet");
	// 	const tweetList = await response.json();
	// 	setTweetList(tweetList);
	// };
	const { request, tweetList } = useContext(TweetContext);
	useEffect(() => {
		request();
	}, [tweetList]);

	return (
		<>
			<ul reversed className="list-group">
				{tweetList.map((tweet) => {
					return (
						<li key={tweet.id} className="list-group-item text-light">
							<div className="card border-0">
								<div className="card-body">
									<p className="card-text">{tweet.body}</p>
									<Button className="btn" onClick={() => setIsOpen(true)}>
										Reply
									</Button>
									<Button
										className="btn"
										onClick={async () => {
											await fetch(
												"http://localhost:8080/api/v1/tweet/" + tweet.id,
												{
													method: "DELETE",
												}
											);
										}}>
										Delete
									</Button>
									<CommentModal open={isOpen}></CommentModal>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default PostBody;
