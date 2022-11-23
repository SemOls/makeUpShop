import Filter from "./Filter"

     function AllBrand (){
        return(
            <div>
<h3> PRODUCT TYPE: </h3>
{["bronzer", "blush","lip_liner","foundation","eyeshadow","eyeliner","nail_polish","lipstick","mascara", "ALL"].map((product_type, index)=><Filter key={index}  product_type={product_type}/>)}
            </div>
        )
     }    
     export default AllBrand