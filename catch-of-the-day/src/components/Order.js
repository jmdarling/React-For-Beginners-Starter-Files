import React from 'react'

import {formatPrice} from './../helpers'

function Order ({fishes, order}) {
  function _renderOrderMaper (currentOrderCount, index) {
    const currentFish = fishes[index]

    if (currentFish == null || currentFish.fishStatus !== 'available') {
      return <li key={index}>Sorry, {currentFish == null ? 'this fish' : currentFish.fishName} is no longer available</li>
    }

    return (
      <li key={index}>
        <span>{currentOrderCount}lbs {currentFish.fishName}</span>
        <span className='price'>{formatPrice(currentOrderCount * currentFish.fishPrice)}</span>
      </li>
    )
  }

  function _totalPriceCentsReducer (previousTotal, currentOrderCount, index) {
    const currentFish = fishes[index]

    if (currentFish == null || currentFish.fishStatus !== 'available' || currentOrderCount == null) {
      return previousTotal
    }

    return previousTotal + (currentFish.fishPrice * currentOrderCount)
  }

  return (
    <div className='order-wrap'>
      <h2>Your Order</h2>

      <ul className='order'>
        {order.map(_renderOrderMaper)}
        <li className='total'><strong>Total: </strong>{formatPrice(order.reduce(_totalPriceCentsReducer, 0))}</li>
      </ul>
    </div>
  )
}

export default Order
