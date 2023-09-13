
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';
export const PrivateRoute = () => {

    const {token} = useContext(AuthContext)
    
    console.log(token, 'token');
    

    return token ? <Outlet/> : <Navigate  to="/"/>
}