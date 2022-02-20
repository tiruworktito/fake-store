import React from "react";
import { useStateValue } from "../Context/Context";
import styled from "styled-components";
function ProductDetails() {
  const [{ cart, detail }, dispatch] = useStateValue();
  const addToCart = (product) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  return (
		<div>
			{detail.map((product,i) => (
				<ProductDetail key={i}>
					<img
						className="details_image"
						src={product.image}
						alt={product.title}
					/>

					<ProductDetailInfo>
						<h3>{product.title}</h3>

						<h3>{product.category}</h3>

						<p className="details_price">
							<small>$</small>
							<strong>{product.price}</strong>
						</p>

						<p className="details_title">{product.description}</p>

						<button onClick={() => addToCart(product)}>Add to Cart</button>
					</ProductDetailInfo>
				</ProductDetail>
			))}
		</div>
	);
}

const ProductDetail = styled.div`
	background-color: #fff;
	display: flex;
	margin-top: 20px;
	margin-left: 40px;

	h3 {
		margin: 20px 0;
	}

	img {
		object-fit: contain;
		width: 400px;
		height: 500px;
		box-shadow: 0 3px 10px rgba(110, 86, 86, 0.75);
	
	}
`;
const ProductDetailInfo = styled.div`
	padding-left: 20px;
	.details_image {
		object-fit: contain;
		width: 300px;
		height: 500px;
	}
	.details_image:hover {
		transform: scale(1.08);
	}
	// .details_title {
	// 	font-size: 17px;
	// 	font-weight: 400;
	// 	margin: 20px 0;
	// 	width: 600px;
	// 	box-shadow: 5px 5px 15px 5px #000000;
	// }
	.details_title {
		// width: 600px;
		margin: 10px;
		padding: 20px;
		width: 300px;
		max-height: 400px;
		box-shadow: 0 3px 10px rgba(110, 86, 86, 0.75);
	}
	button {
		// background: #731649;
		background: black;
		width: 200px;
		height: 30px;
		font-weight: 800;
		font-size: 15px;
		border: 1px solid;
		margin-top: 10px;
		border-color: #a88734 #9c7e31 #846a29;
		color: #fff;
		cursor: pointer;
	}
`;


export default ProductDetails;
