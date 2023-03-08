import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

function Navbar({ cartCount }) {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token')
        sessionStorage.removeItem('User Id')
        window.dispatchEvent(new Event("storage"))
        navigate("/")
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token')
            if (token) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        }

        window.addEventListener('storage', checkAuthToken)

        return () => {
            window.removeEventListener('storage', checkAuthToken)
        }
    }, [])

    const [showNavbar, setShowNavbar] = useState(false)
    const navbarRef = useRef(null)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    useEffect(() => {
        const handleClick = (e) => {
            if (showNavbar && !navbarRef.current.contains(e.target)) {
                setShowNavbar(false)
            }
        }
        document.addEventListener('click', handleClick)
        window.addEventListener('resize', () => {
            setShowNavbar(false)
        })
        return () => {
            document.removeEventListener('click', handleClick)
            window.removeEventListener('resize', () => {
                setShowNavbar(false)
            })
        }
    }, [showNavbar])

    return (
        <nav className="navbar" ref={navbarRef}>
            <div className="container navbar-container">
                <Link to="/" className='navbar-img-container' onClick={() => setShowNavbar(false)}>
                    <img className="navbar-logo" src={logo} alt="Little Lemon logo"/>
                </Link>
                <Link to="/cart" className="navbar-img-container cart-container">
                        <img className="navbar-cart" src={cart} alt="cart"/>
                        {cartCount > 0 ? <div className="cart-count">{cartCount}</div> : null}
                </Link>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <div className={`menu-icon  ${showNavbar && 'active'}`}>
                        <FontAwesomeIcon icon={faBars} onClick={handleShowNavbar}/>
                    </div>
                    <ul>
                        <li><Link to="/" onClick={() => setShowNavbar(false)}>Home</Link></li>
                        <li><Link to="/menu" onClick={() => setShowNavbar(false)}>Menu</Link></li>
                        <li><Link to="/booking" onClick={() => setShowNavbar(false)}>Reservations</Link></li>
                        <li><Link to="/order" onClick={() => setShowNavbar(false)}>Order Online</Link></li>
                        {showNavbar && <br/>}
                        {
                            isLoggedIn ?
                            <li onClick={handleLogout}>Log Out</li>
                            :
                            (
                                <>
                                    <li><Link to="/register" onClick={() => setShowNavbar(false)}>Register</Link></li>
                                    <li><Link to="/login" onClick={() => setShowNavbar(false)}>Login</Link></li>
                                </>
                            )
                        }

                        {showNavbar && <><br/><li><Link to="/cart" onClick={() => setShowNavbar(false)}>Cart<span className="dropdown-cart-count">{cartCount}</span></Link></li></>}
                    </ul>
                </div>
                {showNavbar && <div className="navbar-overlay" onClick={handleShowNavbar}></div>}
            </div>
        </nav>
    )
}

export default Navbar