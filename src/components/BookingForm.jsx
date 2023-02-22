import { useState } from "react"

function BookingForm({availableTimes, updateTimes}) {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("17:00")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("Birthday")

    const handleSubmit = (event) => {
        event.preventDefault()
        // Handle form submission
    }

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        updateTimes(new Date(event.target.value));
      }




    return (
        <>
            <form className="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                >
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(event) => setOccasion(event.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Reserve" />
            </form>
        </>
    )
}

export default BookingForm