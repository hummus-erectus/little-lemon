import { useDispatch } from "react-redux"
import { incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice"

function ProductsSummaryCard({ product }) {
    const dispatch = useDispatch()

    return (
        <div className="product-container">
            <div className="product-image">
                <img src={product.src} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
            </div>
            <div className="product-price-qt">
                <div className="product-price">{`${product.price}$`}</div>
                <div className="product-quantity">
                    <button disabled={product.amount <= 0} onClick={() => dispatch(decrementProductAmount(product))}>-</button>
                    <span>{product.amount}</span>
                    <button onClick={() => dispatch(incrementProductAmount(product))}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsSummaryCard