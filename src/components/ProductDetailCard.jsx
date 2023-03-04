import AddProduct from "./AddProduct"

function ProductDetailCard ({ product, onAddProduct }) {
    const addProduct = () => {
        onAddProduct(product)
    }

    return (
            <div className="preview-card">
                <img className="card-img" src={product.special ? product.src : "/images/salad.jpg"} alt={product.name}></img>
                <div className="card-details">
                    <div className="card-header">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    <p>{product.description}</p>
                    <AddProduct onAddProduct={addProduct}/>
                </div>
            </div>

    )
}

export default ProductDetailCard