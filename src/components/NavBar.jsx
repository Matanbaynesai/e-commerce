import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 80px;
	${mobile({width:"50px"})}
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({padding:"10px 0px"})}

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
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({justifyContent:"center"})}

`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	${mobile({margin:"0px 10px"})}

`;
const Input = styled.input`
	border: none;
	${mobile({width:"50px"})}
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({fontSize:"24px"})}
`;
const ManuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({marginLeft:"15px", fontSize:"15px",fontWeight:600})}
`;

export const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "grey", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>MAT.B&D</Logo>
				</Center>
				<Right>
					<ManuItem>Register</ManuItem>
					<ManuItem>Sign In</ManuItem>
					<ManuItem>
						<Badge overlap="rectangular" badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</ManuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};
