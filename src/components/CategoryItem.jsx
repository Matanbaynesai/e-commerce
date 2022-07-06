import React from "react";
import styled from "styled-components";

const Container = styled.div`
	flex: 1;
    margin:1px;
    height:70vh;
    width:100vw;
    padding:5px;
    position:relative;
`;
const Image = styled.img`
	width: 100%;
    height:100%;
    object-fit:cover;
`;
const Info = styled.div`
    position:absolute ;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100% ;
    height:100% ;
    top:0;
    left:10px;
`;
const Title = styled.h1`
    color:white ;
    font-weight:bold;
    font-size:50px;
    margin-bottom:20px;
    letter-spacing:2px ;
`;
const Button = styled.button`
    padding:15px;
    border:none;
    background-color:#1295EB;
    cursor:pointer;
`;

export const CategoryItem = ({ item } ) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};
