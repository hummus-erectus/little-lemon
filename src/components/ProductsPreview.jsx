import { useState, useEffect } from "react"
import ProductPreviewCard from "./ProductPreviewCard"
import { useDispatch } from "react-redux"
import { addToCart } from "../stores/cart/cartSlice"


function ProductsPreview() {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        fetch('https://little-lemon.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <section>
            <div className="container products-container">
                <h2>Order Online</h2>
                {
                    products.length > 0 && products.map((product, index) => {
                        return (
                            <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct}></ProductPreviewCard>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductsPreview