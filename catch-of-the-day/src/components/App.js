'use strict'

import React, { Component } from 'react'

import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from './../sample-fishes'

class App extends Component {
  constructor () {
    super()

    this.state = {
      fish: []
    }

    this.onAddFish = this.onAddFish.bind(this)
    this.onClickLoadSampleFishes = this.onClickLoadSampleFishes.bind(this)
  }

  onAddFish (fish) {
    this.setState({
      'fish': this.state.fish.concat(fish)
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
        </div>
        <Order />
        <Inventory onAddFish={this.onAddFish} onClickLoadSampleFishes={this.onClickLoadSampleFishes} />
      </div>
    )
  }
}

export default App
