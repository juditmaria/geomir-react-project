import { useContext } from "react";
import { Link, Router } from "react-router-dom";
import { UserContext } from "../userContext";

export default function Header() {
  let { authToken, setAuthToken } = useContext(UserContext);

  fetch("https://backend.insjoaquimmir.cat/api", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ email: email, password: password })
  })
    .then((data) => data.json())
    .then((resposta) => {
      console.log(resposta);
      if (resposta.success === true) {
        alert(resposta.authToken);
      }
    })
    .catch((data) => {
      console.log(data);
      alert("Catchch");
    });

  return (
    <>
      <div>
        <Router>
            <Link to="/places">Places</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/about">About</Link>
        </Router>
        Token: <strong>{authToken}</strong>
      </div>
      <hr />
    </>
  );
}