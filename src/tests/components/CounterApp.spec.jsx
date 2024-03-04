import { act, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CounterApp from '../../components/CounterApp'
import { renderWithRedux } from '../store'

describe('a simple test coverage for counter app', () => {
  it('should display a text on the screen', () => {
    renderWithRedux(<CounterApp />)

    const geterText = screen.getByText('Counter App')
    expect(geterText).toBeInTheDocument()
  })

  it('should check if the buttons exist and are functional', () => {
    renderWithRedux(<CounterApp />)
    let testValue = 0

    const incrementBtn = screen.getByTestId('increment')
    const decrementBtn = screen.getByTestId('decrement')
    const addByFiveBtn = screen.getByTestId('addByFive')
    let total = screen.getByTestId('total').innerHTML

    // Checks if the buttons exist
    expect(incrementBtn).toBeInTheDocument()
    expect(decrementBtn).toBeInTheDocument()
    expect(addByFiveBtn).toBeInTheDocument()
    expect(Number(total)).toBe(testValue)

    // Checks if the buttons are functional
    // Increment
    act(() => {
      incrementBtn.click()
    })

    total = screen.getByTestId('total').innerHTML
    expect(Number(total)).toBe(++testValue)

    // Decrement
    act(() => {
      decrementBtn.click()
    })

    total = screen.getByTestId('total').innerHTML
    expect(Number(total)).toBe(--testValue)

    // Add by 5
    act(() => {
      addByFiveBtn.click()
    })

    total = screen.getByTestId('total').innerHTML
    expect(Number(total)).toBe(testValue + 5)
  })
})
