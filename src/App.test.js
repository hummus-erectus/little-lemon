import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingPage, {fetchAPI} from './pages/BookingPage'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

test('Renders the booking page heading', () => {
  render(<BookingPage />)
  const headingElement = screen.getByText("Reserve a Table")
  expect(headingElement).toBeInTheDocument()
})


describe("Reservation Form HTML validation", () => {


  test('updateTimes returns an array that matches that held within state', () => {
    // jest.mock('./components/api', () => ({
    //   fetchAPI: (date) => {
    //     if (date.toDateString() === new Date().toDateString()) {
    //       return ["17:00", "18:00", "19:00"]
    //     } else if (date.toDateString() === new Date("2022-12-31").toDateString()) {
    //       return ["15:00", "16:00", "17:00"]
    //     } else {
    //       return []
    //     }
    //   }
    // }))

    render(<BookingPage />)
    const dateInput = screen.getByLabelText('Choose Date')
    const timeSelect = screen.getByLabelText('Choose Time')

    // Check initial state
    expect(timeSelect).toHaveTextContent('17:0017:3018:3019:0020:0022:0022:30')

    // Fire a change event on the date input
    fireEvent.change(dateInput, { target: { value: '2022-12-31' } })

    // Check that the time select options have changed
    expect(timeSelect).toHaveTextContent('17:0017:3018:0018:3021:0021:3022:0023:00')
  })

  test('initializeTimes returns an array with at least one value, which is then mapped to select options', () => {
    render(<BookingPage />)
    expect(document.querySelectorAll('#res-time > option').length).toBeGreaterThan(0)
  })
})

describe("Reservation Form HTML validation", () => {
  test("should have required attribute for date input", () => {
    render(<BookingPage />)
    const dateInput = screen.getByLabelText("Choose Date")
    expect(dateInput).toHaveAttribute("required")
  })

  test("should have required attribute for time select", () => {
    render(<BookingPage />)
    const timeSelect = screen.getByLabelText("Choose Time")
    expect(timeSelect).toHaveAttribute("required")
  })

  test("should have required attribute for guests", () => {
    render(<BookingPage />)
    const guestSelect = screen.getByLabelText("Number of Guests")
    expect(guestSelect).toHaveAttribute("required")
    expect(guestSelect).toHaveAttribute("min", "1")
    expect(guestSelect).toHaveAttribute("max", "10")
  })

  test("should have required attribute for first name input", () => {
    render(<BookingPage />)
    const firstNameInput = screen.getByLabelText("First Name")
    expect(firstNameInput).toHaveAttribute("required")
    expect(firstNameInput).toHaveAttribute("minLength", "1")
    expect(firstNameInput).toHaveAttribute("maxLength", "30")
  })

  test("should have required attribute for last name input", () => {
    render(<BookingPage />)
    const lastNameInput = screen.getByLabelText("Last Name")
    expect(lastNameInput).toHaveAttribute("required")
    expect(lastNameInput).toHaveAttribute("minLength", "1")
    expect(lastNameInput).toHaveAttribute("maxLength", "30")
  })

  test("should have required attribute for email input", () => {
    render(<BookingPage />)
    const emailInput = screen.getByLabelText("Email")
    expect(emailInput).toHaveAttribute("required")
    expect(emailInput).toHaveAttribute("maxLength", "200")
  })

  test("should have length attributes for phone number input", () => {
    render(<BookingPage />)
    const phoneInput = screen.getByLabelText("Phone Number")
    expect(phoneInput).toHaveAttribute("minLength", "10")
    expect(phoneInput).toHaveAttribute("maxLength", "25")
  })

  test("should have required attribute for occasion select", () => {
    render(<BookingPage />)
    const occasionSelect = screen.getByLabelText("Occasion")
    expect(occasionSelect).toHaveAttribute("required")
  })
})

describe("submit button should be disabled if any required fields have no input, not disabled if all required fields have input", () => {
  test('button is enabled when all inputs are included', () => {
    render(<BookingPage />)
    const dateInput = screen.getByLabelText("Choose Date")
    fireEvent.change(dateInput, { target: { value: '2023-05-05' } })
    const timeSelect = screen.getByLabelText("Choose Time")
    userEvent.selectOptions(timeSelect, "17:00")
    const guestSelect = screen.getByLabelText("Number of Guests")
    fireEvent.change(guestSelect, { target: { value:"4" } })
    const firstNameInput = screen.getByLabelText("First Name")
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    const lastNameInput = screen.getByLabelText("Last Name")
    fireEvent.change(lastNameInput, { target: { value: 'Smith' } })
    const emailInput = screen.getByLabelText("Email")
    fireEvent.change(emailInput, { target: { value: 'john.smith@gmail.com' } })
    expect(document.getElementById('submitBtn')).toHaveProperty('disabled', false)
  })

  test('button is disabled when date is unselected', () => {
    render(<BookingPage />)
    const dateInput = screen.getByLabelText("Choose Date")
    fireEvent.change(dateInput, { target: { value: '' } })
    const timeSelect = screen.getByLabelText("Choose Time")
    userEvent.selectOptions(timeSelect, "17:00")
    const guestSelect = screen.getByLabelText("Number of Guests")
    fireEvent.change(guestSelect, { target: { value:"4" } })
    const firstNameInput = screen.getByLabelText("First Name")
    fireEvent.change(firstNameInput, { target: { value: 'John' } })
    const lastNameInput = screen.getByLabelText("Last Name")
    fireEvent.change(lastNameInput, { target: { value: 'Smith' } })
    const emailInput = screen.getByLabelText("Email")
    fireEvent.change(emailInput, { target: { value: 'john.smith@gmail.com' } })
    expect(document.getElementById('submitBtn')).toHaveProperty('disabled', true)
  })
})
