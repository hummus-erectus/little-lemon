import About from "../components/About"
import CTA from "../components/CTA"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"

function HomePage() {
    return (
        <>
            <CTA />
            <Specials />
            <Testimonials />
            <About />
        </>
    )
}

export default HomePage