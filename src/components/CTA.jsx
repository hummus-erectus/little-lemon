import { Link } from 'react-router-dom'
import chef from '../assets/chef.jpg'

function CTA() {
    return (
        <header>
            <div className="container header-container">
                <div className='header-text-container'>
                    <h1 className='title'>Little Lemon</h1>
                    <p className='subtitle'>Chicago</p>
                    <p className='leadText'>Proudly serving modern twists on traditional Mediterranean meals and classic cocktails since 1995. You'll love our locally-sourced, sustainable menu and our chef's daily specials. </p>
                    <Link to ="/404">
                        <button>Reserve a Table</button>
                    </Link>
                </div>
                    <img className="header-img" src={chef} alt="Chef preparing salad" />
            </div>
        </header>
    )
}

export default CTA