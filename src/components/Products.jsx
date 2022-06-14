import React from "react";
import { Product } from "./Product";
import styled from "styled-components";
import { productsItems } from "../data";

const Container = styled.div`
	padding: 20px;
	display: flex;
	justify-content:space-between;
    flex-wrap:wrap;
`;

export const Products = () => {
	return (
		<Container>
			{productsItems.map((item) => {
				return <Product item={item} key={item.id} />;
			})}
		</Container>
	);
};
