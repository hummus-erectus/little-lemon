import { render, screen } from '@testing-library/react'
import BookingPage from './pages/BookingPage'

test('Renders the booking page heading', () => {
  render(<BookingPage />)
  const headingElement = screen.getByText("Reserve a Table")
  expect(headingElement).toBeInTheDocument()
})
