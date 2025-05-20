// Dummy.test.jsx
import { render, screen } from '@testing-library/react'
import React from 'react'

// Dummy component
function Dummy() {
  return <div>Hello World</div>
}

// Test for the Dummy component
test('renders Hello World text', () => {
  render(<Dummy />)
  expect(screen.getByText(/hello world/i)).to.exist
})
