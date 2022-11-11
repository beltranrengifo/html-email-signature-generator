import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../src/test-utils'
import { App } from '../src/App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
