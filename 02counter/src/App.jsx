import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

 let [Counter,setCounter] = useState(12)

  // let Counter = 15

  const addValue = () => {
    if(Counter<20){
      setCounter(Counter-1)
    }else{
      alert("Your number is giong to High")
    }
setCounter(Counter + 1)
setCounter(prevCounter =>prevCounter + 1)
setCounter(prevCounter =>prevCounter + 1)
setCounter(prevCounter =>prevCounter + 1)

  }
  const removeValue = () => {
    if(Counter>0){
      setCounter(Counter -1)
    }else{
      alert("Counter cannot be nagative")
    }
     Counter -=  1
setCounter(Counter)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:  {Counter}</h2>
      <button onClick={addValue}>Add Value  {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove value  {Counter}</button>

    </>
  )
}

export default App