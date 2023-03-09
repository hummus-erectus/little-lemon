import Tabs from "../components/Tabs"
import { useSelector } from "react-redux"
import arrowRight from "../assets/arrowRight.svg"
import { cartProducts } from "../stores/cart/cartSlice"
import useTabSwitch from "../hooks/useTabSwitch"
import AddressForm from "../components/AddressForm"
import ProductsSummary from "../components/ProductsSummary"
import { StripeWrapper } from "../components/PaymentForm"
import { Link } from "react-router-dom"
import emptybasket from "../assets/emptybasket.webp"


function Cart() {

    const cart = useSelector(cartProducts)
    const tabs= ['Summary', 'Delivery', 'Payment']
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')

    if (!cart || cart.length === 0) {
        return (
            <main className="container centered empty-cart">
                <img src={emptybasket} alt="Empty basket" className="empty-cart-img" />
                <h1>Your cart is empty</h1>
                <Link to="/menu" className="order-link-btn">
                    <button>
                        Check out our online delivery menu here
                        </button>
                    </Link>
            </main>
        )
    }

    return (
        <main className="container cart-container">
            <h1>Your cart</h1>
             <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} type="cart" />
            <div className={`cart-tab tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <div className="">
                    <button className="summary-btn" onClick={()=>handleTabSwitch('Delivery')}><span className="next-btn-text">Next</span><img className="next-btn-arrow" src={arrowRight} alt="Right Arrow"/></button>
                </div>
            </div>
            <div className={`cart-tab tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`cart-tab tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                <StripeWrapper />
            </div>
        </main>
    )
}

export default Cart