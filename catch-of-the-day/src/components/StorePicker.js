'use strict'

import React, {Component} from 'react'

class StorePicker extends Component {
  render () {
    return (
      <form className='store-picker'>
        <h2 className='store-picker__heading'>Please Enter a Store</h2>
        <input type='text' placeholder='Store Name' required />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
