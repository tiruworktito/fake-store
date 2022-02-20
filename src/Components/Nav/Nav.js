import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SmsIcon from "@material-ui/icons/Sms";
import "./nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/Context";
function Nav() {
	const [{ cart, detail }, dispatch] = useStateValue();
	return (
		<div className="nav">
			<Link to="/">
				<h1 className="store_name">Fake Store</h1>
			</Link>
			<div className="nav__search">
				<input className="nav__searchInput" type="text" />
				<div className="nav__searchIcon">
					<SearchIcon />
					Search
				</div>
			</div>

			<div className="nav__nav">
			

				<Link to="/cart" className="nav__clearlink">
					<div className="nav__optionBasket">
						<span className="nav__optionLineTwo nav__basketCount">
							{cart?.length}
						</span>
						<ShoppingCartIcon />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Nav;
