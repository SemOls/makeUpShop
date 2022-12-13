import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cart from "../Cart/Cart";
import AllBrand from "../Filters/AllBrand";
import MakUps from "../makeUpComponents/makeUps";


const Logout =()=>{
    const { logout, isAuthenticated } = useAuth0();
    return(
        isAuthenticated && (
        <div>
       

            <div className="log">
                <button className="log" onClick={() => logout()}>Log Out</button>
            </div>
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
    ))
}
export default Logout