import specialsData from "./specialsData"

function Specials() {
    return (
        <section>
            <div className="container specials-container">
                <h2>Specials</h2>
                <div className="card-container">
                    {specialsData.map(special => (
                        <div key={special.id} className="special-card">
                            <img className="card-img" src={special.src} alt={special.name}></img>
                            <div className="card-details">
                                <div className="card-header">
                                    <h3>{special.name}</h3>
                                    <p>${special.price}</p>
                                </div>
                                <p>{special.description}</p>
                                <button>Order a delivery</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Specials