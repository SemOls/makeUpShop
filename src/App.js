import Cart from "./Components/Cart/Cart";
import AllBrand from "./Components/Filters/AllBrand";
import MakUps from "./Components/makeUpComponents/makeUps";
import Home from "./Home";



function App() {
  
   
  return (
    <div className="App">
      <Home />
      <div className="main-block">
      <div className="block">
    <AllBrand />
    </div>
    <div className="block">
    <Cart/>
      </div>
      </div>
      <div className="part">
   <MakUps />
      </div>
    </div>
  );
}

export default App;
