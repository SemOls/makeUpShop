import React from 'react';
import { useDispatch } from "react-redux";
import { useState } from "react"
import { addCartItems } from "../Components/Redux/cartSlice";
import ChangeQuantity from "../Components/Cart/ChangeQuantity";

function MakUpComponents ({id,label,image,brand,type,price}) {

    const [quantity, setQuantity] = useState(1);
     const dispatch = useDispatch();

    return (
      <div className="product" >
          <div key={id} className="box orange">
              <h2>{label} </h2>
              <h3>{brand}</h3>
              <h4>{type}</h4>
              <img className='img' src={image}alt="foto" width="200px" />
              <h5>price: $ {price}</h5>
              <button className="button"> <ChangeQuantity quantity={quantity} setQuantity = {setQuantity} /> 
              </button>
              <button className="button" onClick={()=> dispatch(addCartItems ({label, quantity}))}>
                  <img width='20px' alt="addtocart" src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/null/external-add-to-cart-cyber-monday-anggara-flat-anggara-putra-2.png"/>
              </button>
         </div>
      </div>)
}
export default MakUpComponents