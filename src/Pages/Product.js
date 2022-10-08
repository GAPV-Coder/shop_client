import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcements from "../Components/Announcements/Announcements";
import Navbar from "../Components/Navbar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../Redux/cartRedux";
import {
	Container,
	Wrapper,
	ImgContainer,
	Image,
	InfoContainer,
	Title,
	Desc,
	Price,
	FilterContainer,
	Filter,
	FilterTitle,
	FilterColor,
	FilterSize,
	FilterSizeOption,
	AddContainer,
	AmountContainer,
	Amount,
	Button
} from "./ProductStyles";

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id);
				setProduct(res.data);
			} catch {}
		};
		getProduct();
	}, [id]);

	const handleQuantity = type => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	return (
		<Container>
			<Navbar />
			<Announcements />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map(c => (
								<FilterColor color={c} key={c} onClick={() => setColor(c)} />
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={e => setSize(e.target.value)}>
								{product.size?.map(s => (
									<FilterSizeOption key={s}>{s}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<RemoveIcon onClick={() => handleQuantity("dec")} />
							<Amount>{quantity}</Amount>
							<AddIcon onClick={() => handleQuantity("inc")} />
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
