import { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.svg"
import cart from "../assets/cart.svg"

function Navbar() {
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
                <Link to="/cart" className="navbar-img-container">
                        <img className="navbar-cart" src={cart} alt="cart"/>
                        {/* {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null} */}
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
                        <li><Link to="/login" onClick={() => setShowNavbar(false)}>Login</Link></li>
                    </ul>
                </div>
                {showNavbar && <div className="navbar-overlay" onClick={handleShowNavbar}></div>}
            </div>
        </nav>
    )
}

export default Navbar