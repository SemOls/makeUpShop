import data from "../Data/Data"
import MakeUp from "./makUp"
import {getSelectedCategory} from "../Redux/brandsSlice"
import { useSelector } from "react-redux"

function MakUps () {
    const selectedCategory = useSelector(getSelectedCategory)  
    return (
        <div>
{data
.filter(element =>{
    if (selectedCategory === "ALL") return true;
    return selectedCategory === element.product_type;
 })
.map((element,index) =><MakeUp key={index} element={element}/>)}
        </div>
    )
}
export default MakUps