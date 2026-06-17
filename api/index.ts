import axios from "axios";


const instance = axios.create({
    baseURL: process.env.BASE_URL
})

instance.interceptors.request.use ((config) => {
    return config
})

instance.interceptors.response.use((response)=> {
    console.log("respose......", response)
    return response
}, (error) => {
    console.log("error....", error)
} )

export default instance