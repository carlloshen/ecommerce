import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type" : "application/json"
    }
})


const request = (method, url, data) =>{
    let headers;

    const token = localStorage.getItem("user_ref")

    if(token.token){
        headers = `Bearer ${token}`
    }


    return axiosConfig({
        method: method,
        url: url,
        /* headers:headers, */
        data: data
    })
}

export default request