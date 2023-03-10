import { useState } from "react"
import { app } from "../firebase-config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {

    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            name,
            email,
            password,
        }

        let uid = ''
        const authentication = getAuth()
        createUserWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid)
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Email Already In Use')
                }
            })

            fetch('https://little-lemon.onrender.com/api/create-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                })
            }).then((response) => {
                if (response.status === 200) {
                    setLoading(false)
                    toast.success('Account created successfully!🎉', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                        onClose: () => navigate('/')
                        })
                } else {
                    console.log(response.json())
                }
            }).catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }


    return (
        <main className="container register-page">
            {/* <img src={interior} alt="Little Lemon Interior" className="booking-img" /> */}
            <h1>Register</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
                    <label className="name-label" htmlFor="street">Name</label>
                    <input
                        type="text"
                        required
                        aria-autocomplete="inline"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        aria-autocomplete="inline"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <button type="submit" disabled={loading? true : false}>
                    {
                        loading ?
                        'Loading...' :
                        'Register'
                    }
                </button>
            </form>
            <ToastContainer />
        </main>
    )
}

export default Register