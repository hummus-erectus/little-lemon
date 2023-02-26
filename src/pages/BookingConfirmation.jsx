import BookingContext from "../components/BookingContext"
import { useContext } from "react"
import interior2 from "../assets/interior2.webp"

function BookingConfirmation() {
    const formData = useContext(BookingContext).bookingData
    console.log(formData)

    return (
        <main className="container booking confirmation-page">
            <img src={interior2} alt="Little Lemon Interior" className="booking-img" />
            <h1>Success!</h1>
            <p>Your table has been booked. We look forward to welcoming you.</p>
            {formData && (
                <div className="booking-form">
                    <div className="date-and-time">
                        <p><span className="confirmation-label">Date:</span> {formData.date}</p>
                        <p><span className="confirmation-label">Time:</span> {formData.time}</p>
                    </div>
                    <p><span className="confirmation-label">No. of guests:</span> {formData.guests}</p>
                    <p><span className="confirmation-label">Full Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="confirmation-label">Email:</span> {formData.email}</p>
                    <p><span className="confirmation-label">Email confirmation:</span> {formData.confirm ? "Yes" : "No"}</p>
                    {formData.phone && (
                        <p><span className="confirmation-label">Phone:</span> {formData.phone}</p>
                    )}
                    <p><span className="confirmation-label">Occasion:</span> {formData.occasion}</p>
                    {formData.comments && (
                        <p><span className="confirmation-label">Comments/ Requests:</span> <span className="user-comments">{formData.comments}</span></p>
                    )}
                </div>
            )}
        </main>
    )
}

export default BookingConfirmation