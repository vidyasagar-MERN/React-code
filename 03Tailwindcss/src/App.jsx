import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    userName: "Vidya Sagar",
    age:32,
    cgpa: 7.7
  }

  return (
    
    <div className=' flex items-center justify-content-center h-screen '>
      <h1 className='text-3xl font-bold bg-green-500 p-4 rounded-xl' >Tailwind css</h1>
    <Card chanel = "chiaurcode"/>
    <Card chanel = "Vidya Sagar"/>
  </div> 
  )
}

export default App
