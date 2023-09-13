
import { Api } from './../../services/api';
import { IUser } from './types';

import {toast} from 'react-toastify'


export function SetUserLocalStorang (user:IUser | null){
    localStorage.setItem('@token:user', JSON.stringify(user))
}

export function getUserLocalStorang (){
  const user =  localStorage.getItem('@token:user')

  if(!user){
    return null
  }
  const tokenUser =JSON.parse(user)
  return tokenUser ?? null

}

export async function  LoginReequest(email:string, password:string){
  
  const req = await Api.post('/users/session', {email, password})
 
  if(!req.data.error === true) {

    return req.data.rows.token
  } else {
      toast.error(req.data.message)
    }
}

