function ProductPreviewCard({ product, special }) {
    return (
            <div key={product.id} className="special-card">
                <img className="card-img" src={special || product.special ? product.src : "/images/salad.jpg"} alt={product.name}></img>
                <div className="card-details">
                    <div className="card-header">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                    <p>{product.description}</p>
                    {special && <button>Order a delivery</button>}
                </div>
            </div>

    )
}

export default ProductPreviewCard