'use strict'

import React, { Component } from 'react'

import { getFunName } from './../helpers.js'

class StorePicker extends Component {
  render () {
    return (
      <form className='store-selector'>
        <h2>Please Enter a Store</h2>
        <input type='text' placeholder={getFunName()} required />
        <button type='submit'>
          Visit Store
        </button>
      </form>
    )
  }
}

export default StorePicker
