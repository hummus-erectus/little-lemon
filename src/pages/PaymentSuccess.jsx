import interior2 from "../assets/interior2.webp"

function PaymentSuccess() {
    return (
        <main className="container centered payment-success-page">
            <img src={interior2} alt="Little Lemon Interior" className="booking-img" />
            <h1>Thank you for your order!</h1>
            <p>Your meal is on its way. If you requested email confirmation, you will receive a message shortly.</p>
            <p>If you have any questions or feedback, let us know on <span className="tel-num">050 1234 4321</span></p>
        </main>
    )
}

export default PaymentSuccess