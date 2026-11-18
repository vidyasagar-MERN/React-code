import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'




function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Chai aur React and Share is important</h1>
    <Profile />
    <Login />
    </UserContextProvider>
  )
}

export default App
