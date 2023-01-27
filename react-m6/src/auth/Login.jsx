import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-6 mx-auto'>
      <h1 className='fw-bold text-center'>Log in</h1>
      <input type="text" className="form-control" placeholder="Email or username" aria-label="Email or username" aria-describedby="Put your email or username" required/>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Put your password" required/>
        <button className="btn btn-outline-secondary text-uppercase" type="button" id="button-addon2">forgot?</button>
      </div>
      <button className="btn btn-primary text-uppercase fw-bold" type="button">login</button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <hr/>
          </div>
          <div className="col">
            <p className="text-center text-uppercase text-secondary">or</p>
          </div>
          <div className="col">
            <hr/>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col d-grid">
            <button className="btn btn-outline-primary text-uppercase" type="button">github</button>
          </div>
          <div className="col d-grid">
            <button className="btn btn-outline-primary text-uppercase" type="button">google</button>
          </div>
        </div>
      </div>
      <p className="text-center">By signing in to ****, you agree to our Terms and Privacy Policy</p>
      <p className="text-center text-decoration-underline text-secondary">Not registered ?</p>
    </div>
  );
}