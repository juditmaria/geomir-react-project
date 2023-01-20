import { useState } from 'react'
import './App.css'
import { Login } from './auth/Login'
import { Register } from './auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  )
}

export default App