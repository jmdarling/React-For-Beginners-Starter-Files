'use strict'

import React, { Component } from 'react'

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends Component {
  constructor () {
    super()

    this.state = {
      fish: []
    }

    this.onAddFish = this.onAddFish.bind(this)
  }

  onAddFish (fish) {
    this.setState({
      'fish': this.state.fish.concat(fish)
    })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory onAddFish={this.onAddFish} />
      </div>
    )
  }
}

export default App
