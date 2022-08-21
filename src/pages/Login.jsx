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
	width: 35%;
	background-color: white;
	padding: 20px;
	font-size: 20px;
	font-weight: 300;
    ${mobile({width:"70%"})}

`;
const Title = styled.h1`
	font-size: 30px;
	font-weight: 500;
    text-align:center ;
`;
const Form = styled.form`
	display: flex;
	flex-direction:column ;
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

const Button = styled.button`
	width: 100%;
	text-align: center;
	padding: 15px 20px;
	background-color: teal;
	border: none;
	color: white;
	cursor: pointer;
`;
const Link = styled.a`
    font-size:15px;
    font-weight:500;
    padding:10px 0px ;
    text-decoration:underline;
    text-align:center ;
    cursor:pointer;
`
export const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="email" />
					<Input placeholder="user name" />
					<Button>Log In</Button>
                    <Link>DONT REMEMBER YOUR PASSWORD ?</Link>
                    <Link>GET A NEW PASSOWORD</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};
