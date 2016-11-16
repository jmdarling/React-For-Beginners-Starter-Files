'use strict'

import React, {Component} from 'react'

import AddFishForm from './AddFishForm'

class Inventory extends Component {
  constructor (props) {
    super(props)

    this.fishFormDefaultState = {
      fishName: '',
      fishPrice: '',
      fishStatus: '',
      fishDescription: '',
      fishImageUrl: ''
    }

    this.state = {
      addFishForm: this.fishFormDefaultState
    }

    this.onChangeAddFishForm = this.onChangeAddFishForm.bind(this)
    this.onSubmitAddFishForm = this.onSubmitAddFishForm.bind(this)
  }

  onChangeAddFishForm (value) {
    this.setState({
      addFishForm: value
    })
  }

  onSubmitAddFishForm (event) {
    event.preventDefault()

    this.props.onAddFish(this.state.addFishForm)
    this.setState({
      addFishForm: this.fishFormDefaultState
    })
  }

  render () {
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm onChange={this.onChangeAddFishForm} onSubmit={this.onSubmitAddFishForm} value={this.state.addFishForm} />
      </div>
    )
  }
}

export default Inventory
