import CartItem from "./CartItem"
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";

function Cart (){
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div>
           <img alt="cart" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-cart-100-most-used-icons-flaticons-flat-flat-icons.png"/>
            {cartItems.map( (cartItem,index)  =>  <CartItem  key={index} cartItem={cartItem} /> )} 
            <h4>Total: $ {totalPrice.toFixed(2)}</h4>
        </div>
    )
 }    
 export default Cart