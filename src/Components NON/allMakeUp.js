import { useState } from 'react';
import { useEffect } from 'react';
import MakUpComponents from './makUpComponents';


const AllMakeUp = () => {
  
  const [myList, setMyList]=useState([])
  const [myBrand, setMyBrand]= useState("")
 

  useEffect(() => {
    async function fetchData() {
       const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${myBrand}`);
       const data = await response.json();
      setMyList(data);
      console.log(data)
          }
    fetchData();
  }, [myBrand]);
 
  return (
    <div >
          <h2 className='text'>
            Brands list</h2>
        <div className='text'>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("maybelline")}> maybelline </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("almay")}> almay </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("alva")}> alva </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("annabelle")}> annabelle </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("benefit")}> benefit </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("boosh")}> boosh </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("colourpop")}> colourpop </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("covergirl")}> covergirl </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("dalish")}> dalish </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("deciem")}> deciem </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("dior")}> dior </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("essie")}> essie </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("fenty")}> fenty </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("glossier")}> glossier </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("iman")}> iman </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("l%27oreal")}> l`oreal </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("marcelle")}> marcelle </button>
   <button className={"categoryButton"}onClick={()=> setMyBrand ("marienatie")}> marienatie </button>
   <button className={"categoryButton"}onClick={()=> setMyBrand ("milani")}> milani </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("mistura")}> mistura </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("moov")}> moov </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("nudus")}> nudus </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("nyx")}> nyx </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("orly")}> orly </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("pacifica")}> pacifica </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("revlon")}>revlon </button>
   <button className={"categoryButton"} onClick={()=> setMyBrand ("zorah")}> zorah </button>
   </div>

   {myList
     .map(element =>(
    <MakUpComponents 
    id={element.id}
    label={element.name} 
    brand={element.brand}
    image={element.image_link}
    type={element.product_type}
    price={element.price}
    />
   ))}
  
    </div>
  );
}

export default AllMakeUp;
