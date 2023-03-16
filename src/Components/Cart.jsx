import React from "react";

function Cart(props) {
    const {quantity = 0} = props;
  return (
    <div className="cart">
      <i class="large material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
