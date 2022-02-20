import React, { useState } from "react";
import { useStateValue } from "../Context/Context";
import SubTotal from "../subTotal/SubTotal";
import "./checkout.css";


function Checkout() {
  const [{ cart, quantity }, dispatch] = useStateValue();

  console.log("cart", quantity);
  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
const handleQuantity = (quantity) => {
  dispatch({
    type: "ADD_QUANTITY",
   payload: quantity,
  })
}
  return (
    <div className="checkout">
      {cart.length ? (
        <>
      <div className="checkout__left">
        <div>
          {cart.map((item) => (
            <div className="checkoutProduct">
              <img className="checkoutProduct__image" src={item.image} />

              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>

                <div className="quantity">
                  <label htmlFor="qty">Qty</label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    // value={}
                    onChange={(e) => {
                    handleQuantity(e.target.value);
                   
                  }
                  }
                
                  ></input>
                  
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
          </div>
        </>
      ):(
        <h1> Your cart is Empty</h1 >
        )}
    </div>
  );
}

export default Checkout;
