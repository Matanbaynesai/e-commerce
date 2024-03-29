import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({display:"none"})}
`;
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #fff7f7;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: 2;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	opacity: 0.5;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
    transition: all 1.5s ease ;
	transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;
const Image = styled.img`
	height: 100%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
	color:white;
`;
const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	background: transparent;
	font-size: 20px;
	cursor: pointer;
	padding: 10px;
`;

export const Slider = () => {
    const [slideIndex , setSlideIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setSlideIndex(slideIndex < 2  && slideIndex + 1)
		}, 5000);
	  }, [slideIndex]);

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 :2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : slideIndex - 2)
        }
    };
	return (
		<Container>
			<Arrow onClick={() => handleClick("left")} direction="left">
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW!</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow onClick={() => handleClick("right")} direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};
