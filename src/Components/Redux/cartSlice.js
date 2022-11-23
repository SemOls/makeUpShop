import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems: []
    },
    reducers: {
        addCartItems:(state, action) =>{
            const timeId = new Date().getTime()
            state.cartItems.push({
            id:timeId,
            cartId: action.payload.element.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.element.price
             })
        } ,
        removeItemFromCart:(state, action) =>{
            state.cartItems = state.cartItems.filter(
             cartItem => cartItem.id !== action.payload.cartItemId
            )
         }
    }
})
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total, cartItems) =>{
return cartItems.totalPrice + total
    },0 )
}

export const {addCartItems, removeItemFromCart} = cartSlice.actions;
export const getCartItems= state =>state.cart.cartItems;
export default cartSlice.reducer