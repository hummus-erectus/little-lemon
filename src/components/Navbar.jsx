import logo from "../assets/logo.svg"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <img src={logo} alt="Little Lemon logo"/>
                <ul className="navlinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar