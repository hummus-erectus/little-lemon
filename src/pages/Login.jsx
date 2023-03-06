import { useState } from "react"
import { app } from "../firebase-config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {

    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        const data = {
            email,
            password,
        }

        const authentication = getAuth();
        let uid = '';
        signInWithEmailAndPassword(authentication, data.email, data.password)
            .then((response) => {
                uid = response.user.uid;
                sessionStorage.setItem('User Id', uid);
                sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken)
                window.dispatchEvent(new Event("storage"))
                setLoading(false);
                toast.success('Successful Login!🎉', {
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
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password') {
                    toast.error('Wrong Password')
                }
                if (error.code === 'auth/user-not-found') {
                    toast.error('Email not found, please registe')
                }
                setLoading(false);
            })
    }


    return (
        <main className="container register-page">
            {/* <img src={interior} alt="Little Lemon Interior" className="booking-img" /> */}
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        required
                        aria-autocomplete="inline"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" disabled={loading? true : false}>
                    {
                        loading ?
                        'Loading...' :
                        'Login'
                    }
                </button>
            </form>
            <ToastContainer />
        </main>
    )
}

export default Login