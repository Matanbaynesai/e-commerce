import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`;
const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
	${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 2px solid lightgray;
`;
const Input = styled.input`
	border: none;
	flex: 8;
	font-size: 18px;
	text-align: center;
`;
const Button = styled.button`
	border: none;
	flex: 1;
	background-color: teal;
	color: white;
`;
export const NewsLetter = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Desc>get timely update from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your email" />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};
