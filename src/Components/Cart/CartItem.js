import { useDispatch } from "react-redux";
import data from "../Data/Data";
import { removeItemFromCart } from "../Redux/cartSlice";

function CartItem ({cartItem}){
   
    const element = data.find(item => item.id === cartItem.cartId);
    const dispatch = useDispatch( )

    return(
        <div >
            
            <p>{element.name}</p>
            <p> {cartItem.quantity} pcs</p>
            <p> $ {element.price * cartItem.quantity.toFixed(2)}</p>
            <span  onClick={()=> dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>            
                  <img className="icon" width="20px" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
              </span>
            
        </div> 
    )
 }    
 export default CartItem