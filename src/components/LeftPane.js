import React from "react";
import {
	Button,
	Flex,
	HStack,
	Image,
	Input,
	Link as ChakraLink,
	Text,
	VStack,
	Box,
	Center,
	WrapItem,
	Wrap,
	Stack,
	LinkOverlay,
} from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
	Link,
} from "react-router-dom";
import img from "../images/Home.png";
import hashImg from "../images/Hash.png";
import ontifImg from "../images/notif.png";
import profileImg from "../images/profile.png";
import msgImg from "../images/msg.png";
import logo from "../images/logo.png";
import helpimg from "../images/help.png";
import styled from "styled-components";

const LeftPane = () => {
	const linkStyle = {
		textDecoration: "none",
		color: "white",
		fontSize: "22px",
		alignItems: "left",
		marginBottom: "25px",
		fontWeight: "400",
		fontFamily: "sans-serif",
	};

	return (
		<Box border="1px" borderColor="white">
			<VStack spacing="0.0" alignItems="left" mt={55}>
				<Link to="/home" style={linkStyle}>
					<Image boxSize="25px" mr={8} mb={4} src={img}></Image>
					Home
				</Link>
				<Link to="/home" style={linkStyle}>
					<Image boxSize="25px" mr={8} mb={4} src={hashImg}></Image>
					Explore
				</Link>
				<Link style={linkStyle} to="/home">
					<Image boxSize="25px" mr={8} mb={4} src={ontifImg}></Image>
					Notifications
				</Link>
				<Link style={linkStyle} to="/home">
					<Image boxSize="25px" mr={8} mb={4} src={msgImg}></Image>
					Messages
				</Link>
				<Link style={linkStyle} to="/help">
					<Image boxSize="25px" mr={8} mb={4} src={helpimg}></Image>
					Help
				</Link>

				<Stack>
					<Button
						w={[0, 6, 12]}
						color="white"
						bg="#1D9BF0"
						borderRadius="2rem"
						p={10}
						mt={50}>
						Tweet
					</Button>
				</Stack>
			</VStack>
		</Box>
	);
};

export default LeftPane;
