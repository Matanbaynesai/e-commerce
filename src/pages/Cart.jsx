import React from "react";
import { Annoncement } from "../components/Annoncement";
import { Navbar } from "../components/NavBar";
import styled from "styled-components";
// import { Title } from '@material-ui/icons';
import { Footer } from "../components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;
const TopButtom = styled.button`
	padding: 15px;
	font-weight: 600;
	cursor: pointer;
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	border: ${(props) => props.type === "filled" && "none"};
	color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
`;
const Buttom = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Info = styled.div`
	flex: 3;
`;

const Summery = styled.div`
	flex: 1;
`;
const Product = styled.div``;
const ProductDetail = styled.div``;
const Image = styled.div``;
const Details = styled.div``;
const ProductName = styled.div``;
const ProductiD = styled.div``;
const ProductColor = styled.div``;
const ProductSize = styled.div``;

export const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Annoncement />
			<Wrapper>
				<Title>Your Bag</Title>
				<Top>
					<TopButtom>CONTINUE SHOPING</TopButtom>
					<TopTexts>
						<TopText>Shoping Bag (1)</TopText>
						<TopText>Wish List (0)</TopText>
					</TopTexts>
					<TopButtom type="filled">CHECKOUT NOW</TopButtom>
				</Top>
				<Buttom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="" />
								<Details>
									<ProductName>
										<b>Product:</b>SOME SHOE NAME
									</ProductName>
									<ProductiD>
										<b>Product:</b>SOME SHOE NAME
									</ProductiD>
									<ProductColor>
										<b>Product:</b>SOME SHOE NAME
									</ProductColor>
									<ProductSize>
										<b>Product:</b>SOME SHOE NAME
									</ProductSize>
								</Details>
							</ProductDetail>
						</Product>
					</Info>
					<Summery></Summery>
				</Buttom>
			</Wrapper>
			<Footer />
		</Container>
	);
};
