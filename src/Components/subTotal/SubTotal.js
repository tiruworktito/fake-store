import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/Context";
import { useHistory } from "react-router";
import "./subTotal.css";
function SubTotal() {
  const [{ cart, quantity }] = useStateValue();

  const history = useHistory();
  const getCartTotal = (cart) =>
    cart.reduce((amount, item) => quantity  ? (item.price * quantity) : item.price + amount, 0 );

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default SubTotal;
