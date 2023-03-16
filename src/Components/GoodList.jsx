import React from 'react'
import GoodItem from './GoodItem'

function GoodList(props) {

    const { goods = [], addToBasket} = props;

    if(!goods.length){
        return(
            <h1>Nothing Found</h1>
        )
    }

  return (
    <div className='cards'>
        {goods.map((itm, idx) => {
            return(
                <GoodItem {...itm} key={idx} addToBasket={addToBasket}/>
            )
        })}
    </div>
  )
}

export default GoodList