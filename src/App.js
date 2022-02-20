import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import ProductsPage from "./Components/product/ProductsPage";
import ProductDetails from "./Components/product/ProductDetails";

import Checkout from "./Components/checkout/Checkout";
import Payment from "./Components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51ILWaRK6FJ4NvQJQAfitXtvoOesU79Mex29dVJK0y2CXbqoOdmeceakJ0NaCWwvKbUuKTtaSsOj4U2KQeBtfoNZA005UNamqdp"
);
function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/productdetail">
						<Nav />
						<ProductDetails />
					</Route>
					<Route path="/cart">
						<Nav />
						<Checkout />
					</Route>
					<Route path="/checkout">
						<Elements stripe={promise}>
							<Nav />
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Nav />
						<ProductsPage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
