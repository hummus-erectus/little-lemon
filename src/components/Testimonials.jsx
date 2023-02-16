import testimonialsData from "./testimonialsData"
import { useState, useEffect } from "react"


function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length)
            }, 8000)
            return () => clearInterval(interval);
    }, [testimonialsData.length]);

    return (
        <section>
            <div className="container testimonials-container">
                <h2>Testimonials</h2>
                <div className="testimonials-carousel">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                        key={index}
                        className={`testimonial-item ${index === currentIndex ? "active" : ""}`}
                        >
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <p className="testimonial-name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
    </section>
    )
}

export default Testimonials