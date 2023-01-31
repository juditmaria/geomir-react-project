export default function Register ({ setChange }, { isLogin }) {
  return(
    <>
      <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-3 mx-auto m-5'>

        <h1 className='fw-bold text-center fs-3'>Create your profile</h1>
        
        <input type="text" className="form-control rounded-pill" placeholder="Age" aria-label="Age" aria-describedby="Put your age" required/>
        <input type="text" className="form-control rounded-pill" placeholder="Name (optional)" aria-label="Name (optional)" aria-describedby="Put your name (optional)"/>
        <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="Put your email" required/>
        <input type="password" className="form-control rounded-pill" placeholder="Password" aria-label="Password" aria-describedby="Put your password" required/>
        
        <button className="btn btn-primary text-uppercase fw-bold rounded-pill shadow" type="button">create account</button>
        
        <p onClick={() => {setChange(true)}} className="text-center text-decoration-underline loginRegister__auth">Already registered ?</p>

      </div>
    </>
  )
}