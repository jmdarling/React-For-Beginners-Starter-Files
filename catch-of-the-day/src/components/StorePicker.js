'use strict'

import React, { Component } from 'react'

import { getFunName } from './../helpers.js'

class StorePicker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      storeNameInput: ''
    }

    this.onStoreNameChanged = this.onStoreNameChanged.bind(this)
    this.onStorePickerSubmitted = this.onStorePickerSubmitted.bind(this)
  }

  onStoreNameChanged (newValue) {
    this.setState({
      storeNameInput: newValue
    })
  }

  onStorePickerSubmitted (event) {
    event.preventDefault()
  }

  render () {
    return (
      <form className='store-selector' onSubmit={this.onStorePickerSubmitted}>
        <h2>Please Enter a Store</h2>
        <input type='text' onChange={(event) => this.onStoreNameChanged(event.target.value)} placeholder={getFunName()} value={this.state.storeNameInput} required />
        <button type='submit'>
          Visit Store
        </button>
      </form>
    )
  }
}

export default StorePicker
