import React from "react";
import { categories } from "../../data";
import { Container } from "./StyleCategories";
import CategoryItem from "./CategoryItem";

const Categories = () => {
	return (
		<Container>
			{categories.map(item => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
