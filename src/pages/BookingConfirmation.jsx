import BookingContext from "../components/BookingContext"
import { useContext } from "react"

function BookingConfirmation() {
    const formData = useContext(BookingContext).bookingData
    console.log(formData)

    return (
            <main>
                <h1>Success!</h1>
                <p>Your table has been booked. We look forward to welcoming you.</p>
                {formData && (
                    <div>
                        <div>
                            <p>Date: {formData.date}</p>
                            <p>Time: {formData.time}</p>
                        </div>
                        <p>No. of guests: {formData.guests}</p>
                        <p>Full Name: {formData.firstName} {formData.lastName}</p>
                        <p>Email: {formData.email}</p>
                        <p>Email confirmation: {formData.confirm ? "Yes" : "No"}</p>
                        {formData.phone && (
                            <p>Phone: {formData.phone}</p>
                        )}
                        <p>Occasion: {formData.occasion}</p>
                        {formData.comments && (
                            <p>Comments/ Requests: {formData.comments}</p>
                        )}
                    </div>
                )}
            </main>
    )
}

export default BookingConfirmation