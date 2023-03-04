import { useState } from "react"
import { useDispatch } from "react-redux"
import { setAddress } from "../stores/userInfo/addressSlice"
import arrowRight from "../assets/arrowRight.svg"

function AddressForm({ onTabSwitch }) {
    const dispatch = useDispatch()

    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [tel, setTel] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            street,
            city,
            state,
            tel,
        }
        dispatch(setAddress(formData))
        console.log(formData)
        onTabSwitch('Payment')
    }




    return (
        <>
            <form className="address-form" onSubmit={handleSubmit}>
                <h2>Delivery Address</h2>
                <div>
                    <label className="street-label" htmlFor="street">Street Address</label>
                    <input
                        type="text"
                        // placeholder="Street Address"
                        required
                        aria-autocomplete="inline"
                        id="street"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>

                <div className="city-state">
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            required
                            aria-autocomplete="inline"
                            minLength={1}
                            maxLength={30}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            required
                            aria-autocomplete="inline"
                            minLength={1}
                            maxLength={15}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="tel">Phone Number <span className="label-optional">(Optional)</span></label>
                    <input
                        type="tel"
                        id="tel"
                        aria-autocomplete="inline"
                        value={tel}
                        minLength={10}
                        maxLength={25}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>

                {/* <div className="country-code">
                    <div>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="city"
                            required
                            aria-autocomplete="inline"
                            minLength={1}
                            maxLength={30}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            id="state"
                            required
                            aria-autocomplete="inline"
                            minLength={1}
                            maxLength={15}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div> */}

                {/* <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        aria-autocomplete="inline"
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
                </div> */}

                <button type="submit"
                // disabled={!valid}
                >
                    <span className="next-btn-text">Next</span><img className="next-btn-arrow" src={arrowRight} alt="Right Arrow"/>
                </button>
            </form>
        </>
    )
}

export default AddressForm