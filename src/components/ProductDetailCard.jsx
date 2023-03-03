import AddProduct from "./AddProduct"

function ProductDetailCard ({ product, onAddProduct }) {
    return (
            <div key={product.id} className="preview-card">
                <img className="card-img" src={product.special ? product.src : "/images/salad.jpg"} alt={product.name}></img>
                <div className="card-details">
                    <div className="card-header">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    <p>{product.description}</p>
                    <AddProduct onAddProduct={onAddProduct}/>
                </div>
            </div>

    )
}

export default ProductDetailCard