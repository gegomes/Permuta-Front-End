import axios from "axios";
import { getUserLocalStorang } from "../Context/AuthProvider/utils";


export const Api = axios.create({
    baseURL: 'http://localhost:3300/v1'

})

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorang()
        config.headers.Authorization = user?.token
        //   console.log(config ,'config');
        return config
    },
    (error) => {
        return Promise.reject(error)
    }

)



export function register() {
    
    try {
        const response = Api.post('/register')
        console.log(response,'pppppppppp');
        
        return response
    } catch (error) {
        return alert(error)

    }

}