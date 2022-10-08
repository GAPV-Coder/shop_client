import React from "react";
import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import {
	Container,
	Wrapper,
	Left,
	Language,
	Logo,
	SearchContainer,
	Input,
	Center,
	Right,
	MenuItem
} from "./Style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
	const quantity = useSelector(state => state.cart.quantity);
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Buy-it</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SING IN</MenuItem>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={quantity} color="secondary">
								<ShoppingCartOutlinedIcon />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
