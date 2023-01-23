import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>
      <h1 className='fw-bold text-center'>Log in</h1>
      <input type="text" class="form-control rounded-4" placeholder="Email or username" aria-label="Email or username" aria-describedby="Put your email or username"></input>
      <div class="input-group mb-3">
        <input type="text" class="form-control rounded-5 rounded-top-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
    </div>
    </div>
  );
}


