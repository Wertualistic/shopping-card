import React from 'react'

function GoodItem(props) {
    const {mainId, displayName, displayAssets, displayDescription, price, addToBasket} = props;

  return (
    <div class="card" key={mainId}>
        <div class="card-image">
          <img src={displayAssets[0].full_background} alt={displayName} />
        </div>
        <div class="card-content">
        <span class="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div class="card-action">
          <button className="btn" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
          <span className='right'>{JSON.stringify(price.finalPrice)}$</span>
        </div>
      </div>
  )
}

export default GoodItem