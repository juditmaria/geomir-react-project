import React from 'react'
import './App.css'
import Login from './auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
