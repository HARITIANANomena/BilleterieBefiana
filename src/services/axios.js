import axios from "axios"
import useRefreshToken from "./hooks/useRefreshToken"
import { useTokenStore } from "./hooks/useTokenStore"
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL

const myAxiosPrivate = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true,
    headers : {
        'Content-Type' : 'application/json'
    }
})
export const myAxios = axios.create({
    baseURL : API_BASE_URL,
    withCredentials : true,
    // headers : {
    //     'Content-Type' : 'application/json'
    // }
})
myAxiosPrivate.interceptors.response.use(
    res=>res,
    async error =>{
        if (error.response.status === 401){
            console.log(error.response.status);
            console.log("config", error?.config);
            const prevRequest = error?.config
            prevRequest.sent = true
            // console.log(prevRequest?.sent);
            const res = await useRefreshToken()
            console.log("NEW TOKEN", res.data);
            console.log(res.status)
            if (res.status === 200){
                const {setAccessToken} = useTokenStore.getState()
                prevRequest.headers['Authorization'] = `Bearer ${res.data['access']}`
                setAccessToken(res.data['access'])
                console.log("prev request", prevRequest);     
                return myAxiosPrivate(prevRequest);  
            }
        }
        return Promise.reject(error)
    }
)

export default myAxiosPrivate