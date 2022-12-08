
import React from 'react';

function MakUpComponents ({id,label,image,brand,type,price}) {
   
    return (
        <div className="product" >
<div key={id} className="box orange">
 <h2>{label} </h2>
 <h3>{brand}</h3>
 <h4>{type}</h4>
  <img className='img' src={image}alt="foto" width="200px" />
  <h5>price: $ {price}</h5>
  {/* <button>+</button>
  <button>-</button>
  <button>Add to Cart</button> */}
</div>
 </div>)
}
export default MakUpComponents