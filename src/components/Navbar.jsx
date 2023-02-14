import { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.svg"

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
                <a href="#" className='navbar-img-container' onClick={() => setShowNavbar(false)}>
                    <img src={logo} alt="Little Lemon logo"/>
                </a>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={faBars} onClick={handleShowNavbar}/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>Home</a></li>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>About</a></li>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>Menu</a></li>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>Reservations</a></li>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>Order Online</a></li>
                        <li><a href="#" onClick={() => setShowNavbar(false)}>Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar