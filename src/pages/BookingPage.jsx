import { useReducer } from "react"

import BookingForm from "../components/BookingForm"

function BookingPage() {

    const initializeTimes = () => (
        ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
        )

        const [availableTimes, dispatch] = useReducer((state, action) => {
            switch (action.type) {
                case "UPDATE_TIMES":
                    return action.payload;
                default:
                    return state;
            }
        }, initializeTimes());

        const updateTimes = (date) => {
            const updatedTimes = initializeTimes();
            dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
        };

    return (
        <>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
        </>
    )
}

export default BookingPage