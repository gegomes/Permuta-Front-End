import React from 'react'
import { useAuth } from '../../Context/AuthProvider/auth'


export const ProtectedRouterPrivate =({children} :{children: JSX.Element}) => {

    const auth = useAuth()
    
    if(!auth.email){
     
            return (
                <div style={{background: '#915050'}}>
                    <h1>Acesso negado </h1>
                </div>
            )
     
    }
    return children
}