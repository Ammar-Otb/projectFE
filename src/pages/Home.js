import React from "react";
import "../App.css";
import LeftPane from "../components/LeftPane";
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
	Textarea,
} from "@chakra-ui/react";
import TweetBox from "../components/TweetBox";
import PostBody from "../components/PostBody";
import NewsBar from "../components/NewsBar";
import TopBar from "../components/TopBar";
const Home = () => {
	return (
		<>
			<HStack spacing="0" height="100vh">
				<Box width="20%" backgroundColor="#04031a">
					<Flex height="101vh" justifyContent="center">
						<LeftPane />
					</Flex>
				</Box>

				<Box className="borderClass" width="58%" backgroundColor="#04031a ">
					<VStack spacing="0">
						<Box
							className="borderClass2"
							width="56vw"
							height="26vh"
							backgroundColor="#04031a">
							<VStack height="25vh" justifyContent="center">
								<TopBar title={"Home"} />
								<Flex justifyContent="center">
									<TweetBox />
								</Flex>
							</VStack>
						</Box>

						<Box height="75vh" overflow={"hidden"} color="white">
							<Flex
								color="white"
								height="75vh"
								justifyContent="center"
								alignItems="center">
								<PostBody />
							</Flex>
						</Box>
					</VStack>
				</Box>

				<Box className="borderClass" width="25%" backgroundColor="#04031a">
					<VStack height="101vh">
						<TopBar title={"News"} />
						<Flex
							justifyContent="center"
							alignItems="center"
							overflow={"hidden"}>
							<NewsBar />
						</Flex>
					</VStack>
				</Box>
			</HStack>
		</>
	);
};

export default Home;
