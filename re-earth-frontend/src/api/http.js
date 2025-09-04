import axios from 'axios'
import { store } from '../app/store'
import { authSlice } from '../features/authSlice'

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

const http = axios.create({
   baseURL,
   timeout: 10000,
})

// Request interceptor
http.interceptors.request.use(
   (config) => {
      const state = store.getState()
      const token = state.auth.token

      if (token) {
         config.headers.Authorization = `Bearer ${token}`
      }
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

// Response interceptor
http.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.response?.status === 401) {
         store.dispatch(authSlice.actions.logout())
      }
      return Promise.reject(error)
   }
)

export default http
