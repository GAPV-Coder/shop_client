import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Announcements from "../Components/Announcements/Announcements";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import {
	Container,
	Wrapper,
	Title,
	Top,
	TopButton,
	TopTexts,
	TopText,
	Button,
	Info,
	Product,
	ProductDetail,
	Image,
	Details,
	ProductName,
	ProductId,
	ProductColor,
	ProductSize,
	PriceDetail,
	ProductAmountContainer,
	ProductAmount,
	ProductPrice,
	Hr,
	Summary,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	Bottom
} from "./CartStyles";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const KEY =
	"pk_test_51LYDRFCsKS5Jf9j8CbHwclH08wDu2zWZX4fZ6dGUYYz0SSqdEO7j3RoyVQutzwjC424ROZG3YLnPn0741JbOox4O000Oejrqz8";

const Cart = () => {
	const cart = useSelector(state => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const history = useHistory();

	const onToken = token => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: 500
				});
				history.push("/success", {
					stripeData: res.data,
					products: cart
				});
			} catch {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

	const handleQuantity = type => {
		if (type === "dec") {
			quantity > 1 && setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	return (
		<Container>
			<Navbar />
			<Announcements />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Link to="/">
						<TopButton>CONTINUE SHOPPING</TopButton>
					</Link>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map(product => (
							<Product>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b> {product._id}
										</ProductId>
										<ProductColor color={product.color} />
										<ProductSize>
											<b>Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<RemoveIcon onClick={() => handleQuantity("dec")} />
										<ProductAmount>{product.quantity}</ProductAmount>
										<AddIcon onClick={() => handleQuantity("inc")} />
									</ProductAmountContainer>
									<ProductPrice>
										$ {product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name="Buy-it"
							image="https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE=w240-h480-rw"
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
