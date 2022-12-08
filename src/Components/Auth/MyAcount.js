import { useAuth0 } from "@auth0/auth0-react";

const MyAcount =()=>{
    const {user, isAuthenticated } = useAuth0();
    return  (
        isAuthenticated && (
        <div>
         <p> Hello! {user.nickname}</p>
         {/* <p>{user.email}</p> */}
         {/* <img alt="foto" src={user.picture}/> */}
        </div>
    ))
}
export default MyAcount