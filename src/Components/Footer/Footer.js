import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import {
	Container,
	Left,
	Logo,
	Desc,
	SocialContainer,
	SocialIcon,
	Center,
	Title,
	List,
	ListItem,
	Right,
	ContactItem,
	Payment
} from "./Styles";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Buy-it</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color="E60023">
						<PinterestIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<RoomIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South
					Tobinchester 98336
				</ContactItem>
				<ContactItem>
					<PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailIcon style={{ marginRight: "10px" }} /> buy-it@buyit.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
