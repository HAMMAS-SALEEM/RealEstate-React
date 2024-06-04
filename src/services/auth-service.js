import API_URL from '../config/app.config/index'
import axios from "axios"
import { setCookie } from '../utils/cookieHandler'

export const authMethods = {
  signup: async (username, email, password) => {
    try {
      const user = await axios.post(`${API_URL}/signup`, {username, email, password})
      const {accessToken, expiresIn} = user.data.user
      localStorage.setItem('user', JSON.stringify(user.data.user))
      setCookie('accessToken', accessToken, expiresIn)
      return user
    } catch (error) {
      return error
    }
  },
  signin: async (email, password) => {
    try {
      const user = await axios.post(`${API_URL}/login`, {email, password})
      const {accessToken, expiresIn} = user.data
      localStorage.setItem('user', JSON.stringify(user.data))
      setCookie('accessToken', accessToken, expiresIn)
      return user
    } catch (error) {
      return error
    }
  },
  signOut: () => localStorage.clear()
}
