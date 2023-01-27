import { useState } from 'react'

import { Login } from './auth/Login'
import { Register } from './auth/Register'

function App() {

  let [authPage, setAuthPage] = useState(true);
  
/*   let [authPageController, setAuthPage] = useState(0);
  let authPageDefault = 0;

  const authPageTrue = () => {
    setAuthPage(authPageController + 1);
  };
  const authPageFalse = () => {
    authPageDefault--;

    // Per a veure que es modifica
    console.log(authPageDefault);
  }; */

  return (
    <div className="App">
      <button
        onClick={() => {
          setAuthPage(!authPage);
        }}
      >
        Auth Page seleccioner
      </button>
      {authPage ? <Login /> : <Register />}
    </div>
  )
}

export default App