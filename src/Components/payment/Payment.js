import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../Context/Context";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const [{ cart,quantity }, dispatch] = useStateValue();
  // we use it to access the data layer
  const history = useHistory();

  const getCartTotal = (cart) =>
  cart.reduce((amount, item) => quantity  ? (item.price * quantity) : item.price + amount, 0 );


  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  // const [clientSecret, setClientSecret] = useState(true);



  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSumit = (event) => {
    event.preventDefault();
    setProcessing(true);
  }
  const homePage = () => {
    dispatch({
      type: "EMPTY_CART",
    });
    history.replace("/");
  };

  return (
		<PaymentContainer>
			<PaymentWrapper>
				<h1>
					Checkout (<Link to="/cart">{cart?.length} items</Link>)
				</h1>
				{/* <div className="payment__section">
				
				</div>
				<div className="payment__section">
					
				</div>
				<div className="payment__section">
					
				</div> */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{cart.map((item) => (
							<div className="checkoutProduct">
								<img className="checkoutProduct__image" src={item.image} />

								<div className="checkoutProduct__info">
									<p className="checkoutProduct__title">{item.title}</p>
									<p className="checkoutProduct__price">
										<small>$</small>
										<strong>{item.price}</strong>
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSumit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getCartTotal(cart)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>

								<button
									onClick={homePage}
									disabled={processing || disabled || succeeded}
								>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</PaymentWrapper>
		</PaymentContainer>
	);
}

const PaymentContainer = styled.div`
  background-color: white;
`;
const PaymentWrapper = styled.div`
	.payment__section {
		display: flex;
		padding: 20px;
		margin: 0 20px;
		border-bottom: 1px solid lightgray;
	}
	h1 {
		background-color: rgb(234, 237, 237);
		border-bottom: 1px solid lightgray;
		text-align: center;
		padding: 10px;
		font-weight: 400;
	}
	h1 a {
		text-decoration: none;
	}

	.payment__address,
	.payment__items,
	.payment__details {
		flex: 0.8;
	}
	form {
		max-width: 400px;
	}
	.payment__title {
		flex: 0.2;
	}
	h3 {
		padding-bottom: 20px;
	}
	button {
		background: rgb(5, 7, 7);
  
		border-radius: 2px;
		width: 100%;
		height: 30px;
		border: 1px solid;
		font-weight: bolder;
		margin-top: 10px;
		border-color: #731649;
		color: #fff;
	}
`;

export default Payment;
