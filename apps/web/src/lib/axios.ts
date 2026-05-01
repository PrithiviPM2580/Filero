import axios from "axios"

const api = axios.create({
  baseURL: process.env.BUN_BACKEND_URL,
  withCredentials: true,
})

export default api
