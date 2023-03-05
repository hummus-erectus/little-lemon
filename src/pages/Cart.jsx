import Tabs from "../components/Tabs"
import { useSelector } from "react-redux"
import arrowRight from "../assets/arrowRight.svg"
import { cartProducts } from "../stores/cart/cartSlice"
import useTabSwitch from "../hooks/useTabSwitch"
import AddressForm from "../components/AddressForm"
import ProductsSummary from "../components/ProductsSummary"
import { StripeWrapper } from "../components/PaymentForm"


function Cart() {

    const cart = useSelector(cartProducts)
    const tabs= ['Summary', 'Delivery', 'Payment']
    const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary')

    if (!cart || cart.length === 0) {
        return (
            <div>
                <h1>Your cart is empty</h1>
            </div>
        )
    }

    return (
        <main className="container">
            <h1>Your cart</h1>
             <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
                <ProductsSummary />
                <div className="">
                    <button onClick={()=>handleTabSwitch('Delivery')}><span className="next-btn-text">Next</span><img className="next-btn-arrow" src={arrowRight} alt="Right Arrow"/></button>
                </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
                <AddressForm onTabSwitch={handleTabSwitch}/>
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
                <StripeWrapper />
            </div>
        </main>
    )
}

export default Cart