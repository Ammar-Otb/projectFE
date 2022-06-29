import React from "react";
import { useState, useEffect } from "react";
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

const PostBody = () => {
	const [tweetList, setTweetList] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const request = async () => {
		const response = await fetch("http://localhost:8080/api/v1/tweet");
		const tweetList = await response.json();
		setTweetList(tweetList);
	};
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
