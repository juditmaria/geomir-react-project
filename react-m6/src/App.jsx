import React, { useState } from 'react'
import LoginRegister from './auth/LoginRegister'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "./userContext.js";

let [authToken, setAuthToken] = useState("");

export default function App() {
  return (
    <div>
      < UserContext.Provider value={{ authToken, setAuthToken }} >
        <LoginRegister />
      </UserContext.Provider>
    </div>
  )
}