'use strict'

import React, { Component } from 'react'

import Fish from './Fish'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from './../sample-fishes'

class App extends Component {
  constructor () {
    super()

    this.state = {
      fish: [],
      order: []
    }

    this.onAddFish = this.onAddFish.bind(this)
    this.onAddToOrder = this.onAddToOrder.bind(this)
    this.onClickLoadSampleFishes = this.onClickLoadSampleFishes.bind(this)
  }

  onAddFish (fish) {
    this.setState({
      'fish': this.state.fish.concat(fish)
    })
  }

  onAddToOrder (key) {
    const orderState = this.state.order.slice()
    orderState[key] = orderState[key] + 1 || 1

    this.setState({
      order: orderState
    })
  }

  onClickLoadSampleFishes () {
    this.setState({
      fish: sampleFishes
    })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {this.state.fish.map((fish, index) => <Fish key={index} index={index} details={fish} onAddToOrder={this.onAddToOrder} />)}
          </ul>
        </div>
        <Order />
        <Inventory onAddFish={this.onAddFish} onClickLoadSampleFishes={this.onClickLoadSampleFishes} />
      </div>
    )
  }
}

export default App
