import React from "react";
import styled from "styled-components";
import { Annoncement } from "../components/Annoncement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;
const Title = styled.h1`
	font-weight: 200;
	text-align: center;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
    font-size:50px ;
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
					{/* <Price>$20</Price> */}
				</InfoContainer>
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	);
};
