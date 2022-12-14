import React from "react";
import Announcements from "../Components/Announcements/Announcements";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Categories from "../Components/Categories/Categories";
import Products from "../Components/Products/Products";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Announcements />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;
