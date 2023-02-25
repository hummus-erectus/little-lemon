import { useState, useEffect } from "react"

function BookingForm({availableTimes, updateTimes, submitForm}) {
    const [valid, setValid] = useState(false)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("17:00")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("None")
    const [comments, setComments] = useState("")

    const validate = () => {
        if(date.length && time.length && firstName.length && lastName.length && email.length && guests){
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        const isValid = validate()
        setValid(isValid)
    }, [date, time, firstName, lastName, email, guests])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            // firstName,
            // lastName,
            // email,
            // tel,
            date,
            time,
            guests,
            occasion,
            // confirm,
            // comments,
        }
        submitForm(formData)
    }

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        updateTimes(new Date(event.target.value));
      }




    return (
        <>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="date-and-time">
                    <div>
                        <label htmlFor="res-date">Date</label>
                        <input
                            type="date"
                            id="res-date"
                            required
                            value={date}
                            onChange={handleDateChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="res-time">Time</label>
                        <select
                            id="res-time"
                            value={time}
                            required
                            onChange={(event) => setTime(event.target.value)}
                        >
                        {availableTimes.map((availableTime) => (
                            <option key={availableTime} value={availableTime}>
                                {availableTime}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="guest-label" htmlFor="guests">Number of Guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        required
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(event) => setGuests(event.target.value)}
                    />
                </div>

                <div className="full-name">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            required
                            minLength={1}
                            maxLength={30}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            required
                            minLength={1}
                            maxLength={30}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        maxLength={200}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="checkbox-label">
                        Email confirmation of my booking
                        <input
                            type="checkbox"
                            id="confirm"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="tel">Phone Number</label>
                    <input
                        type="tel"
                        id="tel"
                        value={tel}
                        minLength={10}
                        maxLength={25}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(event) => setOccasion(event.target.value)}
                        required
                    >
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Work Party</option>
                        <option>Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="comments">Additional Comments</label>
                        <textarea
                            id="comments"
                            rows={8}
                            maxLength={280}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                    />
                </div>

                <button id="submitBtn" type="submit" disabled={!valid}>
                    Reserve
                </button>
            </form>
        </>
    )
}

export default BookingForm