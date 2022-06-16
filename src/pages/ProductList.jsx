import React from "react";
import styled from "styled-components";
import { Annoncement } from "../components/Annoncement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";
import { Products } from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
	display: flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
`;

export const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Annoncement />
			<Title>Dress</Title>
			<FilterContainer>
				<Filter>somtih</Filter>
				<Filter>somtih</Filter>
			</FilterContainer>
            <Products/>
            <NewsLetter/>
            <Footer/>
		</Container>
	);
};
