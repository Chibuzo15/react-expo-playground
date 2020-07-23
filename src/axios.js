import axios from 'axios';

let baseUrl = "https://protected-springs-06155.herokuapp.com/";

const instance = axios.create({
    baseURL: baseUrl
})

export default instance;