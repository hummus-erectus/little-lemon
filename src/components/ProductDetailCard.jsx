import AddProduct from "./AddProduct"

function ProductDetailCard ({ product, onAddProduct }) {
    const addProduct = () => {
        onAddProduct(product)
    }

    return (
            <>
                <div className="detail-card">
                    <img className="detail-card-img" src={product.src} alt={product.name}></img>
                    <div className="detail-card-details">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="detail-card-transaction">
                            <p>${product.price}</p>
                            <AddProduct onAddProduct={addProduct}/>
                        </div>
                    </div>
                </div>
                <hr />
            </>

    )
}

export default ProductDetailCard