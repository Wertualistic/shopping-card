import React from 'react'

function GoodItem(props) {
    const {mainId, displayName, displayAssets, displayDescription, price, addToBasket} = props;

  return (
    <div className="card" key={mainId}>
        <div className="card-image">
          <img src={displayAssets[0].full_background} alt={displayName} />
        </div>
        <div className="card-content">
        <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button className="btn" onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
          <span className='right'>{JSON.stringify(price.finalPrice)}$</span>
        </div>
      </div>
  )
}

export default GoodItem