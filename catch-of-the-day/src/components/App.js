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
      fishes: [],
      order: []
    }

    this.onAddFish = this.onAddFish.bind(this)
    this.onAddToOrder = this.onAddToOrder.bind(this)
    this.onClickLoadSampleFishes = this.onClickLoadSampleFishes.bind(this)
  }

  onAddFish (fish) {
    const currentState = [...this.state.fishes]
    const newState = currentState.concat(fish)

    this.setState({
      fishes: newState
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
    const newState = sampleFishes

    this.setState({
      fishes: newState
    })
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='list-of-fishes'>
            {this.state.fishes.map((fish, index) => <Fish key={index} index={index} details={fish} onAddToOrder={this.onAddToOrder} />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory onAddFish={this.onAddFish} onClickLoadSampleFishes={this.onClickLoadSampleFishes} />
      </div>
    )
  }
}

export default App
