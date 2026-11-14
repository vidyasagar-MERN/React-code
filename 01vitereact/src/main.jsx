import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>Cunstom Render || Chai gram</h1>
    </div>
  )
}
// const reactElement = {
//     type: "a",
//     props:{
//         href : "https://google.com",
//         target :"_blank"
//     },
//     Children: "Click me visit on google "

// }

const anotherElement = (
  <a href="https://goolge.com" target='_blank'>Visit on Google</a>
)
const anotherUser = "vidya2004sagar@gmail.com"


const reactElement = React.createElement(
  "a",
  {
    href:"https://google.com",target:"_blank"
  },
  "click me to visit Google",
  anotherUser
)
createRoot(document.getElementById('root')).render(
  
    reactElement 
  
)
