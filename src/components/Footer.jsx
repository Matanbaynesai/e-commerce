import {
	Facebook,
	Instagram,
	LinkedIn,
	MailOutline,
	Phone,
	Room,
	Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;
const Right = styled.div`
	flex: 1;
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
    width:50%;
`;
export const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Mat.B&d</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum soluta
					cupiditate recusandae deserunt perspiciatis ullam rem ut dolorum
					consequatur eligendi.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="0A66C2">
						<LinkedIn />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
					<ListItem>Accessories</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight:"10px"}} /> Israel Tel Aviv Zabotinsky 245 street{" "}
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight:"10px"}} />
					+972 0333344
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight:"10px"}}/> deBos@gmail.com{" "}
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};
