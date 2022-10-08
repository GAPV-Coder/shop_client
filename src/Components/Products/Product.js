import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Container, Info, Circle, Image, Icon } from "./StylesProduct";

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlinedIcon />
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
