import React, { useState } from 'react'

const Button = ({ current }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <div>
        <p>Količina:</p>
        <button type="button" onClick={() => setCounter(counter - 1)}>-</button>
        <span>{ counter }</span>
        <button type="button" onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      <div>Price: { counter * current }</div>
    </div>
  )
}

export default Button;
