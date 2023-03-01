import specialsData from "./specialsData"
import ProductPreviewCard from "./ProductPreviewCard"

function Specials() {
    return (
        <section>
            <div className="container specials-container">
                <h2>Specials</h2>
                <div className="card-container">
                    {
                        specialsData.length > 0 && specialsData.map((product, index) => {
                            return (
                                <ProductPreviewCard key={index} product={product} special={true}></ProductPreviewCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Specials