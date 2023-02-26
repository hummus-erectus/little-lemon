import { Link } from 'react-router-dom'
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Menu</Link></li>
                        <li><Link to="">Reservations</Link></li>
                        <li><Link to="">Order Online</Link></li>
                        <li><Link to="">Login</Link></li>
                    </ul>
                </nav>
                <nav>
                    <h3>Contact</h3>
                    <ul>
                        <li>123 Fake Street Chicago IL</li>
                        <li>050 1234 4321</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </nav>
                <nav>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer