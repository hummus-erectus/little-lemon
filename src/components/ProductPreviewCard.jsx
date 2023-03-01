import AddProduct from "./AddProduct"

function ProductPreviewCard({ product, special, onAddProduct }) {

    const addProduct = () => {
        //TODO: Create after setting up redux state for cart to add product
    }

    return (
            <div key={product.id} className="special-card">
                <img className="card-img" src={special || product.special ? product.src : "/images/salad.jpg"} alt={product.name}></img>
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

export default ProductPreviewCard