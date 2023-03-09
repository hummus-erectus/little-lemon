import About from "../components/About"
import CTA from "../components/CTA"
import Specials from "../components/Specials"
import Testimonials from "../components/Testimonials"

function HomePage() {
    return (
        <main>
            <CTA />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}

export default HomePage