import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:8080/ydl/',
    timeout: 2000,
    headers: {'Content-Type': 'application/json;charset=utf-8'}
})

export default request