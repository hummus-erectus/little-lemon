import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage"
import BookingPage from "./pages/BookingPage"
import BookingConfirmation from "./pages/BookingConfirmation"
import NotFound from "./pages/NotFound"
import Footer from './components/Footer'
import BookingProvider from "./components/BookingProvider"

function App() {
  return (
    <>
      <BookingProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/confirmation" element={<BookingConfirmation />}/>
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
