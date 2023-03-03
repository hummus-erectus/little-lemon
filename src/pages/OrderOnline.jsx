import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectAllProducts } from "../stores/menu/productsSlice"
// import { addToCart } from "../../stores/cart/cartSlice";
import ProductDetailCard from "../components/ProductDetailCard"
import Tabs from "../components/Tabs"

function OrderOnline() {
    const dispatch = useDispatch()
    const products = useSelector(selectAllProducts)
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
      dispatch(fetchProducts())
    }, [])

    const onAddProduct = (product) => {
        // dispatch(addToCart(product))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.name.name);
        let index = categories.findIndex(category => newActiveTab === category);
        console.log(index);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    return (
        <main className="container">
            <h1>Order Online</h1>
            {
                products.status !== 'fulfilled' ?
                <div>Loading...</div>:
                <div className="order-menu-container">
                    {
                        products.products &&
                        <Tabs
                            list={products.products.map((product) => product.name.name)}
                            activeTab={activeTab}
                            onTabSwitch={onTabSwitch}
                        />
                    }
                    <div className="order-detail-cards-container">
                        {
                            products.products && products.products[activeTabIndex].products.map((product, index) => {
                                return (
                                <ProductDetailCard key={index} product={product} />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </main>
    )
}

export default OrderOnline