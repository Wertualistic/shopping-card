import React from 'react'

function BasketItem(props) {
    const { id, name, price, quantity } = props;
  return (
    <li className='collection-item'>
        {name} x{quantity} = {JSON.stringify(price.finalPrice) * quantity}$
        <span className='secondary-content'>
            <i className='material-icons'>send</i>
        </span>
    </li>
  )
}

export default BasketItem;