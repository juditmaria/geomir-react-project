export default function Register ({ setChange }, { isLogin }) {
  
  let [formulari, setFormulari] = useState({});

  setFormulari({
    ...formulari,
    [e.target.name]: e.target.value
  });
  
  return(
    <>
      <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-3 mx-auto'>

        <h1 className='fw-bold text-center fs-3'>Create your profile</h1>
        
        <input name="age" type="number" className="form-control rounded-pill" placeholder="Age" aria-label="Age" aria-describedby="Put your age" required
          onChange={handleChange}
        />
        <input name="name" type="text" className="form-control rounded-pill" placeholder="Name (optional)" aria-label="Name (optional)" aria-describedby="Put your name (optional)"
          onChange={handleChange}
        />
        <input name="email" type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="Put your email" required
          onChange={handleChange}
        />
        <input name="password" type="password" className="form-control rounded-pill" placeholder="Password" aria-label="Password" aria-describedby="Put your password" required
          onChange={handleChange}
        />
        
        <button className="btn btn-primary text-uppercase fw-bold rounded-pill shadow" type="button">create account</button>
        
        <p onClick={() => {setChange(true)}} className="text-center text-decoration-underline loginRegister__auth">Already registered ?</p>

      </div>
    </>
  )
}