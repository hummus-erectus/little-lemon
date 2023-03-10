import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSelector, useDispatch } from "react-redux"
import { clearCart, cartProducts } from "../stores/cart/cartSlice"
import { getAddress, clearAddress } from "../stores/userInfo/addressSlice"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

export const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

function PaymentForm() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const cart = useSelector(cartProducts)
    const address = useSelector(getAddress)
    const navigate = useNavigate()
    const elements = useElements()
    const stripe = useStripe()

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (!stripe || !elements || !cart?.length || !address) {
          return;
        }
      
        setLoading(true);
      
        try {
          const { error: backEndError, clientSecret } = await fetch('https://little-lemon.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              paymentMethodType: 'card',
              orderItems: cart,
            //   userId: '',
              shippingAddress: address,
            }),
          }).then((r) => r.json());
      
          console.log('clientSecret:', clientSecret);
      
          const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
      
          if (backEndError || stripeError) {
            setError(backEndError || stripeError);
            alert('There was a problem processing your payment.');
          } else if (paymentIntent.status === 'succeeded') {
            const { error: orderError } = await fetch('https://little-lemon.onrender.com/api/create-order', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({

                orderItems: cart,
                shippingAddress: address,
                total: cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0),
              }),
            }).then((r) => r.json());
      
            if (orderError) {
              setError(orderError);
              console.log(error)
              alert('There was a problem creating your order.');
            } else {
              dispatch(clearAddress());
              dispatch(clearCart());
              navigate('/payment-success');
            }
          }
        } catch (err) {
          console.log(err);
        }
      
        setLoading(false);
      };


    return (
        <>
            <form className="payment-form" onSubmit={handleSubmit}>
                <label className="card-details-label" htmlFor="card-element">Please enter your card details</label>
                <div className="my-4">
                    <CardElement id="card-element" />
                </div>
                <button type="submit" disabled={loading? true : false}>
                    {
                        loading ?
                        'Loading...' :
                        'Pay Now'
                    }
                </button>
            </form>
        </>
    )
}
