import { useSelector ,useDispatch} from "react-redux";
import {getSelectedCategory, filterCategory} from "../Redux/brandsSlice"

function Filter ({product_type}) {
    const selectedCategory = useSelector(getSelectedCategory)
    const dispatch = useDispatch();
    
    return (
        <div>
          <p onClick={()=> {dispatch(filterCategory(product_type))}} 
           className={selectedCategory ===  product_type ? "categoryButtonSelected buttonSelected" : "categoryButton" }>
           {product_type}
  
           </p>
          
        </div>
    )
}
export default Filter