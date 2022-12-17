import CartItem from "./CartItem"
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import StripeContainer from "../../Stripe/StripeContainer";
import { useState } from "react";

function Cart (){
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [showPay, setShowPay] = useState(false);
    
    return(
        <div>
          {showPay ? 
          <div className="modal">
           <StripeContainer/>
           </div>
            :
          <div>
          <img alt="cart" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-cart-100-most-used-icons-flaticons-flat-flat-icons.png"/>
           {cartItems.map( (cartItem,index)  =>  <CartItem  key={index} cartItem={cartItem} /> )} 
           <h4>Total: $ {totalPrice.toFixed(2)}</h4>
           <button onClick={()=> setShowPay(true)}> <img className="icon" src="https://img.icons8.com/dotty/80/null/get-cash.png" width="25px" alt="icon"/> go to pay </button>
       </div>
            }
        </div>
    )
 }    
 export default Cart