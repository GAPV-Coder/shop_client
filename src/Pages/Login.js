import React, { useState } from "react";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import {
	Container,
	Wrapper,
	Title,
	Form,
	Input,
	Link,
	Button,
	Error
} from "./LoginStyles";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector(state => state.user);

	const handleClick = e => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						placeholder="Username"
						onChange={e => setUsername(e.target.value)}
					/>
					<Input
						placeholder="Password"
						type="password"
						onChange={e => setPassword(e.target.value)}
					/>
					<Button onClick={handleClick} disabled={isFetching}>
						LOGIN
					</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
