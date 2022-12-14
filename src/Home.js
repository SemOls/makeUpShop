
// import AllMakeUp from "./Components NON/allMakeUp"
import Login from "./Components/Auth/login"
import Logout from "./Components/Auth/logot"
import MyAcount from "./Components/Auth/MyAcount"
import Foto from "./HomeFoto"


const Home =()=>{
    
    return(
     
    <div>
            <nav>
              <div className="log">  <Login /> </div>
                <div className="account"> <MyAcount/></div>
                <div> <Logout/> </div>
            </nav>
        
            <div className="header">
                <h1> Makeup Online Shop</h1>
            </div>
             {/* <AllMakeUp/> */}
             <Foto/>                 
    </div>
    )
}
export default Home