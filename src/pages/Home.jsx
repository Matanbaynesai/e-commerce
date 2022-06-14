import React from "react";
import { Annoncement } from "../components/Annoncement";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";
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
	  <NewsLetter/>
	  <Footer/>
		</div>
	);
};

export default Home;
