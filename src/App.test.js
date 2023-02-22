import { render, screen, fireEvent } from '@testing-library/react'
import BookingPage from './pages/BookingPage'

test('Renders the booking page heading', () => {
  render(<BookingPage />)
  const headingElement = screen.getByText("Reserve a Table")
  expect(headingElement).toBeInTheDocument()
})

test('initializeTimes returns the correct array', () => {
  render(<BookingPage />)
  const expectedArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  expect(document.querySelectorAll('#res-time > option')).toHaveLength(expectedArray.length)
  for(let i=0; i < expectedArray.length; i++){
    expect(document.querySelectorAll('#res-time > option')[i].textContent).toBe(expectedArray[i])
  }
})
