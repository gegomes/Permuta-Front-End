
import {createContext, useEffect, useState} from "react";

import { IAuthProvider, IContext, IUser } from "./types";
import { LoginReequest, SetUserLocalStorang, getUserLocalStorang } from "./utils";


export const AuthContext = createContext<IContext>({} as IContext)


export const AuthProvider = ({children}:IAuthProvider) =>{
    const [user,  setUser] = useState<IUser | null>()


    useEffect(() => {
        const user = getUserLocalStorang()
        if(user){
            setUser(user)
        }

    },[])

    async function authenticate (email: string, password:string){
        const response = await LoginReequest(email, password)
        const payload = {token: response, email}

        setUser(payload)
        SetUserLocalStorang(payload)


    }

    async function logout (){
        setUser(null)
        SetUserLocalStorang(null)
        localStorage.removeItem("@token:user")
    }



    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
                {children}
        </AuthContext.Provider>
    )
} 