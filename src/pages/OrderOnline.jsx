import { useEffect } from "react"
import ProductsPreview from "../components/ProductsPreview"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectAllProducts } from "../stores/menu/productsSlice"

function OrderOnline() {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)

    useEffect(() => {
      dispatch(fetchProducts())
    }, [])

    return (
        <>
            {
                products.status !== 'fulfilled' ?
                <div>Loading...</div>:
                <ProductsPreview />
            }
        </>
    )
}

export default OrderOnline