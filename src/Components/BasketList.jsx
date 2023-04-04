import React from "react";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order, decrementQuantity, incrementQuantity } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <div className="bsk">
      <ul className="collection basket-list" key={order.mainId}>
        <li className="collection-item active">Basket</li>
        <li className="list">
          {order.length ? (
            order.map((itm) => {
              return (
                <BasketItem
                  {...itm}
                  key={itm.mainId}
                  removeFromBasket={props.removeFromBasket}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
              );
            })
          ) : (
            <p>Basket is empty</p>
          )}
        </li>
        <li className="collection-item active">Total Price: {totalPrice}$</li>
        <i
          className="material-icons basket-close"
          onClick={props.handleBasketShow}
        >
          close
        </i>
      </ul>
    </div>
  );
}

export default BasketList;
