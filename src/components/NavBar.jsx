import { Badge } from "@material-ui/core";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 80px;
`;
const Wrapper = styled.div`
	padding: 0px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Right = styled.div`
	flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;
const Input = styled.input`
	border: none;
`;
const Logo = styled.h1`
	font-weight: bold;
`;
const ManuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
    margin-left:25px;
`;

export const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{color:"grey", fontSize:16}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>MAT.B&D</Logo>
				</Center>
				<Right>
					<ManuItem>Register</ManuItem>
					<ManuItem>Sign In</ManuItem>
					<ManuItem>
						<Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
						</Badge>
					</ManuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};