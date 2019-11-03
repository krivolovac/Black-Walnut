import React from 'react'

const InputPrice = ({price, onPriceChange}) => {
  return (
    <div>
      <p>Cijena KN</p>
      <input type="number"
              name="message"
              value={price}
              onChange={onPriceChange} />
    </div>
  )
}

export default InputPrice
