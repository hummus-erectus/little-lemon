import founders from "../assets/founders.jpg"

function About() {
    return (
        <section className="about-section">
            <div className="container about-container">
                <h2>Our Story</h2>
                <div className="story-container">
                    <img className="founders-img" src={founders} alt="Mario and Adrian" />
                    <div className="about-text-container">
                        <p>Little Lemon is a plant-based Mediterranean restaurant located in the heart of Chicago, founded by the dynamic duo, Mario and Adrian. Both of them grew up in the city, and they have always been passionate about food and health. After years of dreaming about opening their own restaurant, they decided to combine their love for Mediterranean cuisine and plant-based eating to create Little Lemon.
                        <br />
                        <br />
                        The name "Little Lemon" comes from the bright, citrusy flavor that lemon adds to many Mediterranean dishes, and it also represents the small but mighty impact that the restaurant hopes to make in the community. Mario and Adrian are committed to using only the freshest, locally sourced ingredients in their dishes, and they are passionate about sustainability and reducing their environmental impact.
                        <br />
                        <br />
                        The menu at Little Lemon features a variety of plant-based Mediterranean dishes, from classic falafel wraps and hummus to more innovative dishes like jackfruit tacos and vegan shawarma. There are also plenty of gluten-free and nut-free options, making it a great spot for anyone with dietary restrictions. The restaurant is casual and welcoming, with a bright and airy atmosphere that reflects the owners' passion for health and wellness.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About