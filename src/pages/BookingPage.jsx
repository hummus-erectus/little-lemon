import { useReducer } from "react"
import { fetchAPI, submitAPI } from "../components/api"

import BookingForm from "../components/BookingForm"

function BookingPage() {

    const initializeTimes = () => (
        fetchAPI(new Date)
    )

    const [availableTimes, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                return action.payload
            default:
                return state
        }
    }, initializeTimes())

    const updateTimes = (date) => {
        const updatedTimes = fetchAPI(date)
        dispatch({ type: "UPDATE_TIMES", payload: updatedTimes })
    }

    return (
        <>
            <h1>Reserve a Table</h1>
            <p>Whatever the occasion, you and your party will always feel welcome at Little Lemon.</p>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
        </>
    )
}

export default BookingPage