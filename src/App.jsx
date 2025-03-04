import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Carousel/>
    </div>
  )
}

export default App
