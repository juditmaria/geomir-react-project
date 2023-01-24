import React from 'react'

export const Register = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-6 mx-auto'>
      <h1 className='fw-bold text-center'>Create your profile</h1>
      <input type="text" class="form-control" placeholder="Age" aria-label="Age" aria-describedby="Put your age" required/>
      <input type="text" class="form-control" placeholder="Name (optional)" aria-label="Name (optional)" aria-describedby="Put your name (optional)"/>
      <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="Put your email" required/>
      <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="Put your password" required/>
      <button className="btn btn-primary text-uppercase fw-bold" type="button">create account</button>
      <p className="text-center text-decoration-underline text-secondary">Already registered ?</p>
    </div>
  )
}