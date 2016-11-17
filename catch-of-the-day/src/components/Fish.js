import React from 'react'

import { formatPrice } from './../helpers'

function Fish ({details, index, onAddToOrder}) {
  return (
    <li className='menu-fish'>
      <img src={details.fishImageUrl} alt={details.fishName} />
      <h3 className='fish-name'>
        {details.fishName}
        <span className='price'>{formatPrice(details.fishPrice)}</span>
      </h3>
      <p>{details.fishDescription}</p>
      <button disabled={details.fishStatus !== 'available'} onClick={() => onAddToOrder(index)}>{details.fishStatus === 'available' ? 'Add to Order' : 'Sold Out'}</button>
    </li>
  )
}

export default Fish
