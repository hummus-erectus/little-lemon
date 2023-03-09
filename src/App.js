import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"
import BookingConfirmation from "./pages/BookingConfirmation"
import OrderOnline from "./pages/OrderOnline"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PaymentSuccess from "./pages/PaymentSuccess"
import NotFound from "./pages/NotFound"
import Footer from './components/Footer'
import BookingProvider from "./components/BookingProvider"
import Cart from "./pages/Cart"
import { useSelector } from "react-redux"
import { cartProducts } from "./stores/cart/cartSlice"
import { sumBy } from "lodash"

function App() {
  const productsInCart = useSelector(cartProducts)
  const cartCount = sumBy(productsInCart, "amount")

  return (
    <>
      <BookingProvider>
        <Router>
          <Navbar cartCount={cartCount}/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/confirmation" element={<BookingConfirmation />}/>
            <Route path="/menu" element={<OrderOnline />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/payment-success" element={<PaymentSuccess />}/>
            <Route path='/404' element={<NotFound />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
          <Footer />
        </Router>
      </BookingProvider>
    </>
  )
}

export default App
