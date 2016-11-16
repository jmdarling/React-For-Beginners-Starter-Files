import React, {PropTypes} from 'react'

function AddFishForm ({onChange, onSubmit, value}) {
  return (
    <form className='fish-edit' onSubmit={onSubmit}>
      <input type='text' placeholder='Fish Name' onChange={event => onChange(Object.assign({}, value, { fishName: event.target.value }))} value={value.fishName} />
      <input type='text' placeholder='Fish Price' onChange={event => onChange(Object.assign({}, value, { fishPrice: event.target.value }))} value={value.fishPrice} />

      <select onChange={event => onChange(Object.assign({}, value, { fishStatus: event.target.value }))} value={value.fishStatus}>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold Out!</option>
      </select>

      <textarea placeholder='Fish Description' onChange={event => onChange(Object.assign({}, value, { fishDescription: event.target.value }))} value={value.fishDescription} />
      <input type='text' placeholder='Fish Image URL' onChange={event => onChange(Object.assign({}, value, { fishImageUrl: event.target.value }))} value={value.fishImageUrl} />
      <button type='submit'>Add Item</button>
    </form>
  )
}

AddFishForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.object
}

export default AddFishForm
