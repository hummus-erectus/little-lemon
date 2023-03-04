import { useSelector } from "react-redux"
import { cartProducts } from "../stores/cart/cartSlice"
import ProductsSummaryCard from "./ProductsSummaryCard"

function ProductsSummary() {
    const cart = useSelector(cartProducts)

    return (
        <div className="products-summary">
             { cart && cart?.map((product, index) => {
                return (
                    <ProductsSummaryCard product={product} key={index} />
                )
            })}
        </div>
    )
}

export default ProductsSummary