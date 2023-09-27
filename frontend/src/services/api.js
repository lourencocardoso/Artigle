import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:6060'
})

export default api