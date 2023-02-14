import logoVertical from "../assets/logoVertical.png"

function Footer() {
    return (
        <footer>
            <div className="container footer-container">
                <div className="image-container">
                    <img className="footerImg" src={logoVertical} alt="Little Lemon logo full size"/>
                </div>
                <nav>
                    <h3>Site Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
                <nav>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>email</li>
                    </ul>
                </nav>
                <nav>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer