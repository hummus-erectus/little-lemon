import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload
            const existingProduct = state.products.find(p => p._id === product._id)
            if (existingProduct) {
              existingProduct.amount += 1
            } else {
                const newProduct = { ...product, amount: 1 };
                state.products.push(newProduct)
            }
        },
        clearCart: (state) => {
            return {products: []}
        },
        incrementProductAmount: (state, action) => {
            const { _id } = action.payload;
            return {
                products: state.products.map(product =>
                    product._id === _id ? { ...product, amount: product.amount + 1 } : product
                )
            };
          },
        decrementProductAmount: (state, action) => {
            const { _id } = action.payload;
            return {
                products: state.products.map(product =>
                    product._id === _id ? { ...product, amount: product.amount - 1 } : product
                )
            };
        },
    }
})

export const cartProducts = state => state.cart.products

export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer