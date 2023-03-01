import { useState, useEffect } from "react"
import ProductPreviewCard from "./ProductPreviewCard"

function ProductsPreview() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <section>
            <div className="container products-container">
                <h2>Order Online</h2>
                {
                    products.length > 0 && products.map((product, index) => {
                        return (
                            <ProductPreviewCard key={index} product={product}></ProductPreviewCard>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductsPreview