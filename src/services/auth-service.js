import API_URL from '../config/app.config/index'
import axios from "axios"

export const authMethods = {
  signup: async (email, password) => {
    try {
      const user = await axios.post(username, email, password)
      localStorage.setItem('user', JSON.stringify(user.data))
      return user.data
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
  signOut: async () => {
    try {
      await signOut(auth)
      localStorage.clear()
    } catch (error) {
      return error
    }
  }
}
