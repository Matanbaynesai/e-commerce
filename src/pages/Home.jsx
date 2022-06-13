import React from "react";
import { Annoncement } from "../components/Annoncement";
import { Navbar } from "../components/NavBar";
import { Slider } from "../components/Slider";

const Home = () => {
	return (
		<div>
			<Annoncement />
			<Navbar />
      <Slider/>
		</div>
	);
};

export default Home;
