import axios from "axios"



const Instance = axios.create({
    // baseURL:"https://tour-reactapp-backend.herokuapp.com/api/"
    baseURL:"http://localhost/api/"
})

export default Instance