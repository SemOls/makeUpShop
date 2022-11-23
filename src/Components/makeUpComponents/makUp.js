import { useState } from "react"
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addCartItems } from "../Redux/cartSlice";

const MakeUp =({element})=>{
 const [quantity, setQuantity] = useState(1);
 const dispatch = useDispatch();

    return (
<div className="product" >
<div  className="box orange" key={element.id}>
<h3>{element.name}</h3>
<h4>{element.brand}</h4>
<img alt="foto" width="200px" src={element.image_link}/>
<h5> <img alt="icon" width="20px" src={element.link}/> type: {element.product_type} </h5>
<h5>price: $ {element.price}</h5>
<button className="button"> <ChangeQuantity quantity={quantity} setQuantity = {setQuantity} /> </button>
<button className="button" onClick={()=> dispatch(addCartItems ({element, quantity}))}>
<img width='20px' alt="addtocart" src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/null/external-add-to-cart-cyber-monday-anggara-flat-anggara-putra-2.png"/>
 </button>
</div>
</div>
    )
}
export default MakeUp