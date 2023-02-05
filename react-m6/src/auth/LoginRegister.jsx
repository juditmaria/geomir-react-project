import { useState } from "react"
import Login from '../auth/Login'
import Register from "./Register";
import { UserContext } from "./userContext.js";


export default function LoginRegister () {

    let [isLogin, setLogin] = useState(true);

    return (
        <div>
            {isLogin ? <Login setChange={setLogin} /> : <Register setChange={setLogin} /> }
        </div>
    )
} 
