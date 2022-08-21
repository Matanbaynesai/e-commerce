import React from "react";
import { Annoncement } from "../components/Annoncement";
import { Navbar } from "../components/NavBar";
import styled from "styled-components";
// import { Title } from '@material-ui/icons';
import { Footer } from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
    ${mobile({padding:"10px"})}
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
const TopTexts = styled.div`
    ${mobile({display:"none"})}
`;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
`;
const Buttom = styled.div`
	display: flex;
	justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;
const Image = styled.img`
	width: 200px;
`;
const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductiD = styled.span``;
const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const ProductAmountContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 20px;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
`;
const ProductPrice = styled.div`
	font-size: 30px;
    ${mobile({marginBottom:"20px"})}
`;

const Hr = styled.hr`
	background-color: #eee;
	height: 3px;
	border: none;
`;
const Summery = styled.div`
	flex: 1;
	border: 0.5px solid grey;
	border-radius: 10px;
	padding: 20px;
    height:50vh;
    font-weight:400 ;
`;
const SummaryTitle = styled.div`
	text-align: center;
	font-weight: 400;
	font-size: 20px;
    padding:5px ;
`;
const SummaryItem = styled.div`
	margin:30px 0px;
    display:flex ;
    justify-content:space-between ;
    font-weight:${props => props.font === "total" && "500"} ;
    font-size:${props => props.font === "total" && "24px"} ;
`;
const SummaryItemText = styled.div`
`;
const SummaryItemPrice = styled.div`
	padding: 5px;
`;
const Button = styled.button`
    width:100% ;
    border:none;
    padding:15px ;
    background-color:black;
    color:white;

`;

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
								<Image src="https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?b=1&k=20&m=1149654373&s=170667a&w=0&h=B6JPkVf7-0Fty3R05byj4RbXX1c07x_zg2O-OHN7Ovo=" />
								<Details>
									<ProductName>
										<b>Product Name:</b>SOME SHOE NAME
									</ProductName>
									<ProductiD>
										<b>Product ID:</b>25425432652
									</ProductiD>
									<ProductColor color="black" />
									<ProductSize>
										<b>Product Size:</b>SOME SHOE Size
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src="https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?b=1&k=20&m=1149654373&s=170667a&w=0&h=B6JPkVf7-0Fty3R05byj4RbXX1c07x_zg2O-OHN7Ovo=" />
								<Details>
									<ProductName>
										<b>Product Name:</b>SOME SHOE NAME
									</ProductName>
									<ProductiD>
										<b>Product ID:</b>25425432652
									</ProductiD>
									<ProductColor color="black" />
									<ProductSize>
										<b>Product Size:</b>SOME SHOE Size
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summery>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>SubTotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shiping</SummaryItemText>
							<SummaryItemPrice>$ 4.30</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shiping Discount</SummaryItemText>
							<SummaryItemPrice>$ -4.30</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem font="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summery>
				</Buttom>
			</Wrapper>
			<Footer />
		</Container>
	);
};
