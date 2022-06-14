import React from "react";
import { Annoncement } from "../components/Annoncement";
import { Categories } from "../components/Categories";
import { Navbar } from "../components/NavBar";
import { Products } from "../components/Products";
import { Slider } from "../components/Slider";

const Home = () => {
	return (
		<div>
			<Annoncement />
			<Navbar />
      <Slider/>
      <Categories/>
      <Products/>
		</div>
	);
};

export default Home;
