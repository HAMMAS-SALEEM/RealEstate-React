import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import app from '../firebase/firebaseIndex'

const auth = getAuth(app)

export const authMethods = {
  signup: async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(user.user))
      return user.user
    } catch (error) {
      return [error.code, error.message]
    }
  },
  signin: async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(user.user))
      return user.user
    } catch (error) {
      return [error.code, error.message]
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
