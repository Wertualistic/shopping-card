import React from 'react'
import BasketItem from './BasketItem';

function BasketList(props) {
    const {order} = props;
  return (
    <ul className='collection basket-list'>
        <li className='collection-item active'>Basket</li>
          {order.length ? order.map((itm) => {
            return(
              <BasketItem {...itm} key={itm.id}/>
            )
          }) : (<p>Basket is empty</p>)}
        <li className='collection-item active'>Total Cost: {order.length * +order.quantity}</li>
    </ul>
  )
}

export default BasketList