// import { useState } from 'react';
// import { useEffect } from 'react';
// import MakUpComponents from './makUpComponents';

// const AllMakeUp = () => {
  
//   const [myList, setMyList]=useState([])
//   const [myBrand, setMyBrand]= useState("maybelline")


//   useEffect(() => {
//     async function fetchData() {
//        const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${myBrand}`);
//        const data = await response.json();
//       setMyList(data);
//       console.log(data)
//           }
//     fetchData();
//   }, [myBrand]);
 

//   return (
//     <div >

//    {myList
//      .map(element =>(
//     <MakUpComponents 
//     id={element.id}
//     label={element.name} 
//     brand={element.brand}
//     image={element.image_link}
//     type={element.product_type}
//     price={element.price}
//     />
//    ))}
  
//     </div>
//   );
// }

// export default AllMakeUp;
