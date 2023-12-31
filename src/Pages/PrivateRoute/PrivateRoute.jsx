
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    

    if(loading){
        return <span className="loading loading-dots loading-xs"></span>
    }

    if(user?.email){
        return  children
    }
    return <Navigate to='/login' replace>login</Navigate>
};

export default PrivateRoute;