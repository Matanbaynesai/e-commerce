import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 98.9vw;
	height: 100vh;
	background: url("https://img1.wallspic.com/crops/9/2/6/3/23629/23629-monochrome_mode-model-woman-singer-girl-2560x1600.jpg") center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Wrapper = styled.div`
	width: 40%;
	background-color: white;
	padding: 20px;
	font-size: 20px;
	font-weight: 300;
    ${mobile({width:"70%", height:"90%"})}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	padding: 10px;
	border-top: none;
	border-right: none;
	border-left: none;
	/* margin-right:5px ; */
	text-align: center;
	letter-spacing: 2px;
	margin: 10px 5px;
`;
const Agreement = styled.span`
	padding: 10px;
	margin: 10px 5px;
`;
const Button = styled.button`
	width: 40%;
	text-align: center;
	padding: 15px 20px;
	background-color: teal;
	border: none;
	color: white;
	cursor: pointer;
`;

export const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="first name" />
					<Input placeholder="last name" />
					<Input placeholder="email" />
					<Input placeholder="user name" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Agreement>
						by creating an account ,i consent to the processing of my personal
						data in accordance with the <b>PRIVACY PPOLICY</b>
					</Agreement>
					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};
