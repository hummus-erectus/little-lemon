import { useState } from "react"
import BookingContext from "./BookingContext"

function BookingProvider({ children }) {
  const [bookingData, setBookingData] = useState({})

  const updateBookingData = (data) => {
    setBookingData(data)
  };

  return (
    <BookingContext.Provider value={{ bookingData, updateBookingData }}>
      {children}
    </BookingContext.Provider>
  );
}

export default BookingProvider