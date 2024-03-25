import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '2d44389c62c241d28ec776d6115c2da8'
    }
})