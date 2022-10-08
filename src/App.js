import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Success from "./Pages/Success";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
	const user = useSelector(state => state.user.currentUser);
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:category">
					<ProductList />
				</Route>
				<Route path="/product/:id">
					<Product />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/success">
					<Success />
				</Route>
				<Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
