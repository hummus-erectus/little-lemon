import { useState, useEffect } from "react"
import ProductPreviewCard from "./ProductPreviewCard"
import { useDispatch } from "react-redux"
import { addToCart } from "../stores/cart/cartSlice"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function Specials() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const responsive = {
        wide: {
          breakpoint: { max: 4000, min: 1140 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1139, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 799, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 575, min: 0 },
          items: 1
        }
    }

    useEffect(() => {
        fetch('https://little-lemon.onrender.com/api/products')
            .then(response => response.json())
            .then(data => setProducts(data.data))
            .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }


    return (
        <section>
            <div className="container specials-container">
                <h2>Specials</h2>
                <Carousel responsive={responsive}>
                    {
                        products.length > 0 && products.map((product, index) => {
                            return (
                                <div key={index} className="card-container">
                                    <ProductPreviewCard product={product} onAddProduct={onAddProduct}/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Specials