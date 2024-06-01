import { initializeApp } from 'firebase/app'

// ------------------------------------------------
// I know the below data should be hidden by default but this is here for development purposes only

const firebaseConfig = {
  apiKey: 'AIzaSyBnnvJzZOi79KSPRmVThlBCuyR792OyMW4',
  authDomain: 'ecommerce-242dc.firebaseapp.com',
  projectId: 'ecommerce-242dc',
  storageBucket: 'ecommerce-242dc.appspot.com',
  messagingSenderId: '983919122086',
  appId: '1:983919122086:web:2e1d6f94f2c9eb9cdcc667',
  measurementId: 'G-G793S0VJLT'
}

// ------------------------------------------------

const app = initializeApp(firebaseConfig)

export default app;
