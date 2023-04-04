import React from "react";

function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket,
    decrementQuantity,
    incrementQuantity,
  } = props;
  return (
    <li className="collection-item">
      {displayName} x{quantity} = {JSON.stringify(price.finalPrice) * quantity}$
      <span
        className="secondary-content"
      >
        <button className="waves-effect waves-light btn" onClick={() => incrementQuantity(mainId)}>
          <i className="material-icons">add</i> Add
        </button>
        <button className="waves-effect waves-light btn" onClick={() => decrementQuantity(mainId)}>
          <i className="material-icons">remove</i> Remove
        </button>
        <i className="material-icons basket-delete" onClick={() => removeFromBasket(mainId)}>delete_forever</i>
      </span>
    </li>
  );
}

export default BasketItem;
