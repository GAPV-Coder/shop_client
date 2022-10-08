import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcements from "../Components/Announcements/Announcements";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Products from "../Components/Products/Products";
import {
	Container,
	Title,
	FilterContainer,
	Filter,
	FilterText,
	Select,
	Option
} from "./ProductListStyles";

const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = e => {
		const value = e.target.value;
		setFilters({
			...filters,
			[e.target.name]: value
		});
	};

	return (
		<Container>
			<Navbar />
			<Announcements />
			<Title>{cat}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name="color" onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>white</Option>
						<Option>black</Option>
						<Option>veige</Option>
						<Option>blue</Option>
						<Option>yellow</Option>
						<Option>green</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={e => setSort(e.target.value)}>
						<Option value="newest">Newest</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products cat={cat} filters={filters} sort={sort} />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
