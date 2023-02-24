// import { render, screen, fireEvent } from '@testing-library/react'
// import BookingPage, {fetchAPI} from './pages/BookingPage'

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

// test('Renders the booking page heading', () => {
//   render(<BookingPage />)
//   const headingElement = screen.getByText("Reserve a Table")
//   expect(headingElement).toBeInTheDocument()
// })

// test('initializeTimes returns an array with at least one value, which is then mapped to select options', () => {
//   render(<BookingPage />)
//   expect(document.querySelectorAll('#res-time > option').length).toBeGreaterThan(0)
// })

// jest.mock('./components/api', () => ({
//   fetchAPI: (date) => {
//     if (date.toDateString() === new Date().toDateString()) {
//       return ["17:00", "18:00", "19:00"];
//     } else if (date.toDateString() === new Date("2022-12-31").toDateString()) {
//       return ["15:00", "16:00", "17:00"];
//     } else {
//       return [];
//     }
//   },
// }));

// test('updateTimes returns an array that matches that held within state', () => {
//   render(<BookingPage />)
//   const dateInput = screen.getByLabelText('Choose date');
//   const timeSelect = screen.getByLabelText('Choose time');

//   // Check initial state
//   expect(timeSelect).toHaveTextContent('17:00');

//   // Fire a change event on the date input
//   fireEvent.change(dateInput, { target: { value: '2022-12-31' } });

//   // Check that the time select options have changed
//   expect(timeSelect).toHaveTextContent('15:00');
//   expect(timeSelect).toHaveTextContent('16:00');
//   expect(timeSelect).toHaveTextContent('17:00');
// });
