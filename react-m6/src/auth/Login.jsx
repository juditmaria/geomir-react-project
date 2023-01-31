export default function Login({ setChange }, { isLogin }) {
  return(
    <>
      <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-3 mx-auto'>
        
        <h1 className='fw-bold text-center fs-3'>Log in</h1> 
        
        <input type="text" className="form-control rounded-pill loginRegister__input" placeholder="Email or username" aria-label="Email or username" aria-describedby="Put your email or username" required/>
        
        <div className="input-group mb-3">
          <input type="password" className="form-control rounded-end rounded-pill" placeholder="Password" aria-label="Password" aria-describedby="Put your password" required/>
          <button className="btn btn-outline-secondary text-uppercase border-secondary rounded-start rounded-pill" type="button" id="button-addon2">forgot?</button>
        </div>
        
        <button className="btn btn-primary text-uppercase fw-bold rounded-pill shadow" type="button">login</button>

        <div className="container text-center">
          <div className="row">
            <div className="col p-0">
              <hr/>
            </div>
            <div className="col-2 p-0">
              <p className="text-center text-uppercase text-secondary">or</p>
            </div>
            <div className="col p-0">
              <hr/>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col d-grid">
              <button className="btn btn-outline-primary text-uppercase rounded-pill shadow" type="button">github</button>
            </div>
            <div className="col d-grid">
              <button className="btn btn-outline-primary text-uppercase rounded-pill shadow" type="button">google</button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-secondary">By signing in to ****, you agree to our <strong>Terms</strong> and <strong>Privacy Policy</strong></p>
        
        <p onClick={() => {setChange(!!isLogin)}} className="text-center text-decoration-underline loginRegister__auth ">Not registered ?</p>
      
      </div>
    </>
  )
}

      
