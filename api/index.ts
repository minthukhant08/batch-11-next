import axios from "axios";


const instance = axios.create({
    baseURL: process.env.BASE_URL
})

instance.interceptors.request.use ((config) => {
    return config
})

instance.interceptors.response.use((response)=> {
    return response
}, (error) => {
    console.log("error....", error)
} )

export default instance