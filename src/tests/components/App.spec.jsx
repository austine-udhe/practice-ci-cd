import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '../../pages/Home'

describe('a simple test coverage', () => {
  it('should check if truthy', () => {
    expect(1).toBeTruthy()
  })

  it('should display a text on the screen', () => {
    render(<Home />)

    const geterText = screen.getByText('Homer')
    expect(geterText).toBeInTheDocument()
  })
})
