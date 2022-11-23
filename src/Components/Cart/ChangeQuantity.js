const ChangeQuantity =({quantity, setQuantity})=>{

    const addQuantity =()=>{
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }

    const removeQuantity =()=>{
        const newQuantity = quantity -1;
        if (newQuantity <1) return true;
        setQuantity(newQuantity)
    }
    return (
        <div >
           <button className="button" onClick={addQuantity}> + </button>
            <span className="button"> {quantity} </span>  
            <button className="button" onClick={removeQuantity}> - </button>
        </div>
    )
}
export default ChangeQuantity