import { useState } from "react";

export default function Register ( { setChange } ) {
  
  let [formulari, setFormulari] = useState({});

  const handleChange = (e) => {
    e.preventDefault();

    setFormulari({
      ...formulari,
      [e.target.name]: e.target.value
    });
  };

  const sendRegister = (e) => {
    let { age, name, email, password } = formulari;

    alert(
      "He enviat les Dades:  " +
        age +
        "/" +
        name +
        "/" +
        email +
        "/" +
        password 
    );
  }

  return(
    <>
      <div className='position-absolute top-50 start-50 translate-middle d-grid gap-2 col-3 mx-auto'>

        <h1 className='fw-bold text-center fs-3'>Create your profile</h1>
        
        <input name="age" type="text" className="form-control rounded-pill" placeholder="Age" aria-label="Age" aria-describedby="Put your age" required
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
        
        <button className="btn btn-primary text-uppercase fw-bold rounded-pill shadow" type="button"
         onClick={(e) => {
           sendRegister(e)
         }}
        >create account</button>
        
        <p className="text-center text-decoration-underline loginRegister__auth"
          onClick={() => {
            setChange(true)
          }}
        >Already registered ?</p>

      </div>
    </>
  )
}