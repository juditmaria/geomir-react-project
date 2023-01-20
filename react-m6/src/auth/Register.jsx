import React from 'react'

export const Register = () => {
  return (
    <div>
      <h1>Create your profile</h1>
      <input type="number" placeholder="Age" required/>
      <input type="text" placeholder="Name (optional)"/>
      <input type="email" placeholder="Email" required/>
      <input type="password" placeholder="Password" required/>
      <button>CREATE ACCOUNT</button>
    </div>
  )
}