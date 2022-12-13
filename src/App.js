// import Cart from "./Components/Cart/Cart";
// import AllBrand from "./Components/Filters/AllBrand";
// import MakUps from "./Components/makeUpComponents/makeUps";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";



function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h4>waiting please...</h4>

  return (
    <div className="App">
      <Home />
      
 
      {/* <div className="main-block">
      <div className="block">
    <AllBrand />
    </div>
    <div className="block">
    <Cart/>
      </div>
      </div>
      <div className="part">
    <MakUps />
      </div> */}
    </div>
  );
}

export default App;
