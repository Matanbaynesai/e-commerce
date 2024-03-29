import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Annoncement } from "../components/Annoncement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({flexDirection:"column",padding:"10px"})}
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({width:"100%",height:"40vh"})}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({padding:"0px 10px"})}
`;
const Title = styled.h1`
	font-weight: 200;
	text-align: center;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-size: 50px;
	${mobile({textAlign:"center"})}
`;
const FilterContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	margin: 30px 0px;
	${mobile({width:"100%"})}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200px;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	margin: 30px 0px;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
	width: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 3px solid teal;
	cursor: pointer;
	background-color: white;
	font-weight:600;
	font-size:16px ;
	transition:0.3s ;

	&:hover{
		background-color:teal;
	}
`;

export const Product = () => {
	return (
		<Container>
			<Navbar />
			<Annoncement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/u1zdvupiwoyyilv7pohm/sportswear-jdi-t-shirt-1Jk5gt.png" />
				</ImgContainer>
				<InfoContainer>
					<Title>Some title</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
						dicta aliquam consectetur labore quis reprehenderit nihil
						consequatur repellat modi Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Porro, laborum enim? Quae ducimus maiores
						assumenda id placeat ut non voluptatibus.
					</Desc>
					<Price>$20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color:</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="grey" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
								<FilterSizeOption>XXL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>Add to cart</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	);
};
