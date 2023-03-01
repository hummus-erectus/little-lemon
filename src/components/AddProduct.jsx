function AddProduct({ onAddProduct }) {
    return (
        <div className="flex justify-end">
            <button onClick={onAddProduct}><span>Add to Cart</span></button>
        </div>
    )
}

export default AddProduct