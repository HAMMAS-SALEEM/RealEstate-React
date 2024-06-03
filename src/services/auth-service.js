import API_URL from '../config/app.config/index'
import axios from "axios"

export const authMethods = {
  signup: async (email, password) => {
    try {
      const user = await axios.post(`${API_URL}/signup`, {username, email, password})
      localStorage.setItem('user', JSON.stringify(user.data))
      return user
    } catch (error) {
      return error
    }
  },
  signin: async (email, password) => {
    try {
      const user = await axios.post(`${API_URL}/login`, {email, password})
      localStorage.setItem('user', JSON.stringify(user.data))
      return user
    } catch (error) {
      return error
    }
  },
  signOut: () => localStorage.clear()
}
