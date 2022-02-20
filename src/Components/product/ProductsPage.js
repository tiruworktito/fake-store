import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/Context";
import "./productsPage.css";

function ProductsPage() {
  const [{ cart, detail }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data.products));
  }, []);
 // dispatch the item into the data layer
  const addToDetail = (product) => {
    dispatch({
      type: "ADD_TO_DETAIL",
      payload: product,
    });
  };

    return ( 
		<div>
			<Link to="/productdetail" className="link">
				<div className="product__row">
					{products.map((product, id) => ( 
						<div className="product" key={id}>
							<div className="product__info">
								<h5>{product.title}</h5>
							</div>
							<img
								src={product.image}
								alt=""
								onClick={() => addToDetail(product)}
							/>
							<div className="product__info">
								<p className="product__price">
									<small>$</small>
									<strong>{product.price}</strong>
								</p>
								 
							</div>
						</div>
					))}
				</div>
			</Link>
		</div>
	);
}

export default ProductsPage;
