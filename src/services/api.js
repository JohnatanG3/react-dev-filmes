import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a15e5d3036beb6490b4bdafb921f9593",
        language: "pt-BR",
        pages: 1
    }
})

export default api