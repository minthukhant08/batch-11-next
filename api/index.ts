import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3001'
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