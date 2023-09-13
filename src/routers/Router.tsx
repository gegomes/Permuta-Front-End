
import {
  Route,
  Routes,
 
} from "react-router-dom";
import { Dashboard } from "../Screen/Dashboard";
import { Login } from "../Screen/Login";
import { CreateUser } from "../Screen/CreateUser";

export function Router() {
    return (
     
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/creatuser" element={<CreateUser/>} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
       

    )
}