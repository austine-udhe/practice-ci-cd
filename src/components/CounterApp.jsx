import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const CounterApp = () => {
  const total = useSelector((state) => state.total)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: { value: 1 } })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: { value: 1 } })
  }

  const addByFive = () => {
    dispatch({ type: 'ADD_BY', payload: { value: 5 } })
  }

  return (
    <div>
        <h2>Counter App</h2>
        <p>Count: <span data-testid='total'>{total}</span></p>
        <button data-testid='increment' onClick={increment}>Increment</button>
        <button data-testid='decrement' onClick={decrement}>Decrement</button>
        <button data-testid='addByFive' onClick={addByFive}>Add by 5</button>
    </div>
  )
}

export default CounterApp
